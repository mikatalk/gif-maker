<template>
  <div 
    class="webgl-canvas" 
    ref="container"
  >
    <canvas 
      ref="canvas"
      class="canvas"
      :width="frameWidth" 
      :height="frameHeight"
      v-bind:style="{
        transform: cssTransform
      }"
    ></canvas>
  </div>
</template>

<script>
// import _ from 'lodash'
import Btn from './../components/Btn.vue'

import { mapGetters } from 'vuex'
const { GLLayer } = require('./../shaders/GLLayer')

export default {
  name: 'webgl-canvas',

  components: {
    'btn': Btn
  },

  data () {
    return {
      gl: this.gl,
      cssTransform: ''
    }
  },

  computed: {
    ...mapGetters([
      'windowWidth',
      'windowHeight',
      'isPortrait',
      'frameWidth',
      'frameHeight',
      'shaderCode',
      'isProcessing'
    ])
  },

  mounted () {
    this.gl = new GLLayer(this.$store, this.$refs.canvas, this.shaderCode)
    this.handleResize()
    this.running = true
    this.tick()
  },

  beforeDestroy () {
    // this.gl.unload()
    // this.running = false
  },

  watch: {
    windowWidth (newWidth, oldWidth) {
      this.handleResize()
    },
    windowHeight (newHeight, oldHeight) {
      this.handleResize()
    },
    frameWidth (newWidth, oldWidth) {
      this.handleResize()
    },
    frameHeight (newHeight, oldHeight) {
      this.handleResize()
    },
    shaderCode (newCode, oldCode) {
      this.gl.updateShaderCode(this.shaderCode)
    },
    isProcessing (newState) {
      if (newState) {
        this.gl.renderLoopGif(performance.now())
          .then((blob) => this.$store.dispatch('presentGif', {blob: blob}))
      }
    }
  },

  methods: {
    tick () {
      if (!this.running) return
      if (this.isProcessing) {

      } else {
        let time = performance.now()
        this.gl.update(time * 0.001, Math.abs(Math.sin(time * 0.001)))
      }
      requestAnimationFrame(() => this.tick())
    },

    handleResize () {
      this.$refs.canvas.width = this.frameWidth
      this.$refs.canvas.height = this.frameHeight
      this.gl.handleResize(this.frameWidth, this.frameHeight)

      let scale
      let left
      let top
      if (this.isPortrait) {
        scale = Math.min(
          this.windowWidth / this.frameWidth,
          this.windowHeight / 2 / this.frameHeight
        )
      } else {
        scale = Math.min(
          this.windowWidth / 2 / this.frameWidth,
          this.windowHeight / this.frameHeight
        )
      }
      left = (this.$refs.container.clientWidth / scale - this.frameWidth) / 2
      top = (this.$refs.container.clientHeight / scale - this.frameHeight) / 2
      scale = Math.round(scale * 100) / 100
      left = Math.round(left * 100) / 100
      top = Math.round(top * 100) / 100
      this.cssTransform = `scale(${scale}) translate(${left}px, ${top}px)`
    }
  }
}

</script>

<style lang="scss">

.webgl-canvas { 
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border: none;
  canvas {
    background: #cccccc;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform-origin: top left;
  }
  .btn {
    background: #fafafa;
  }
}

</style>
