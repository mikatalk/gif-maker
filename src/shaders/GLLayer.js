/* eslint-disable */

const THREE = require('three')
const { deepDispose } = require('./../util/deep-dispose')
import randomcolor from 'randomcolor'
import GIF from 'gif.js'

const vertex = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`

const fragment = (shaderCode) => `

  precision mediump float;
  precision mediump int;

  uniform float uElapsedTime;
  uniform float uLoopRatio;
  uniform vec3 uColor;
  // attribute vec2 uv;

  varying vec2 vUv;
  
  #define PI 3.14
 
  float circle(vec2 uv, float scale) {
    return length(uv - .5) * 1.0 / scale;
  }

  float rect (vec2 uv, vec2 s) {
    uv = uv * 2.0 - 1.0;
    return max( abs(uv.x / s.x), abs(uv.y / s.y));
  }
  
  float sdHexPrism( vec3 p, vec2 h ) {
    vec3 q = abs(p);
    return max(q.z-h.y,max((q.x*0.866025+q.y*0.5),q.y)-h.x);
  }

  vec2 repeat(vec2 uv, vec2 tiles) {
    return fract(uv * tiles);
  }
  
  vec2 rotate (vec2 uv, float a) {
    uv = mat2(cos(a), -sin(a), sin(a), cos(a)) * (uv - 0.5);
    return uv + 0.5;
  }


  // void main() {
    // float alpha = 1.0;
    // vec3 color = uColor;
    // float elapsedTime = uElapsedTime;
    // float loopRatio = uLoopRatio;

    ${shaderCode}

    // gl_FragColor = clamp(vec4( color, alpha), 0.0, 1.0);
  // }
`

export class GLLayer {

  constructor (canvas, shaderCode) {

    this.glCanvas = document.querySelector('.webgl-canvas canvas')

    this.canvas = canvas
    let width = canvas.width
    let height = canvas.height

    // start up with default mouse pos mid screen
    this.mouseX = this.mouseY = 0.5
    this.previousMouseX = this.previousMouseY = 0.5

    this.camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, -10000, 10000)

    this.scene = new THREE.Scene()

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uElapsedTime: {value: 0},
        uLoopRatio: {value: 0},
        uColor: {value: new THREE.Color(randomcolor())}
      },
      vertexShader: vertex,
      fragmentShader: fragment(shaderCode),
      depthWrite: false,
      transparent: true,
      depthTest: 0.1
    })

    let plane = new THREE.PlaneBufferGeometry(width, height)

    let quad = new THREE.Mesh(plane, this.material)
    this.scene.add(quad)

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      // alpha: true,
      // autoClear: false,
      // preserveDrawingBuffer: true
    })
    this.renderer.setSize(this.canvas.width, this.canvas.height)
    // this.renderer.setSize(window.innerWidth, window.innerHeight)
    // this.renderer.setClearColor(0xffffff)
    // this.renderer.setClearColor(0x130c25)
    this.renderer.setClearColor(0xffffff, 1)
    // this.renderer.autoClear = false;
    // this.renderer.setPixelRatio(0.1)
    // this.renderer.setPixelRatio(0.5)
    // this.renderer.setPixelRatio(window.devicePixelRatio || 1)
    this.renderer.setPixelRatio(1)

    // document.addEventListener('mousemove', () => this.onDocumentMouseMove(), false)
    // window.addEventListener('resize', this.handleResize.bind(this), false)
  }

  unload () {
    while (this.scene.children.length > 0) {
      const object = this.scene.children[this.scene.children.length - 1]
      deepDispose(object)
      this.scene.remove(object)
    }
    this.renderer.dispose()
    this.renderer.forceContextLoss()
    this.renderer.context = undefined
    this.renderer.domElement = undefined
    // until next garbage collection
    this.canvas.width = 1
    this.canvas.height = 1
  }

  handleResize (width, height) {
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height)
  }

  update (elapsedTime, loopRatio) {
    this.renderer.setClearColor(0xffffffff, 0)
    this.material.uniforms.uElapsedTime.value = elapsedTime
    this.material.uniforms.uLoopRatio.value = loopRatio
    this.renderer.render(this.scene, this.camera)
  }

  updateShaderCode (code) {
    let gl = this.renderer.getContext()
    var shader = gl.createShader( gl.FRAGMENT_SHADER );
    gl.shaderSource( shader, fragment(code) );
    gl.compileShader( shader );
    let compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if ( !compiled ) {
      console.log('- NO -')
    } else {
      this.material.fragmentShader = fragment(code)
      this.material.needsUpdate = true
      console.log('+ OK +')
    }  
  }

  renderLoopGif () {
    return new Promise((resolve, fail) => {
      const gif = new GIF({
        workers: 8,
        quality: 1
      })

      function* timeIntervalGenerator (max) {
        let i = 1 // skip first frame for perfect circle
        while (i < max) {
          yield i / (max - 1)
          i++
        }
      }

      let gen = timeIntervalGenerator(30)

      while ( true ) {
        let value = gen.next().value;
        if (isNaN(value)) {
          break;
        }

        let time = performance.now()
        this.update(time, (1 + Math.sin(value * Math.PI * 2)) / 2)
        let img = new Image()
        img.src = this.glCanvas.toDataURL()
        img.onload = () => {
          gif.addFrame(img, {delay: 80, dispose: -1})
          console.log('Add at', value)
          if (value === 1) {
            gif.on('finished', (blob) => {
              resolve(URL.createObjectURL(blob))
            })
            gif.render()
            console.log('Rendering gif...')
          }
        }
      }
    })
  }
}
