<template>
  <div 
    class="webgl-canvas" 
    ref="container"
    @click="renderGIF()"
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
    // console.log('OK?', this.shaderCode)
    this.gl = new GLLayer(this.$refs.canvas, this.shaderCode)
    this.handleResize()
    // this.gl = new GLLayer(this.$refs.canvas,_.clone(this.shaderCode))
    this.running = true
    // this.gl.renderLoopGif()
    this.tick()
    // this.$store.dispatch('setRenderer', this.gl.renderer)
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
      // return _.debounce((newCode, oldCode) => {
      // console.log('REFRESH')
      // (newCode, oldCode) {
      this.gl.updateShaderCode(this.shaderCode)
      // }, 2000)
    },
    isProcessing (newState) {
      if (newState) {
        this.gl.renderLoopGif(performance.now())
          .then((blob) => this.$store.dispatch('presentGif', {blob: blob}))
      }
    }
    // shaderCode: _.debounce((newCode, oldCode) => {
    //   console.log('REFRESH')
    //   // (newCode, oldCode) {
    //   this.gl.updateShaderCode(newCode)
    // }, 2000)
  },

  methods: {
    tick () {
      if (!this.running) return
      if (this.isProcessing) {

      } else {
        let time = performance.now()
        this.gl.update(time, this.pageScrollRatio)
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

    // renderGIF () {
    //   this.gl.renderLoopGif(performance.now())
    // }
    // renderGIF: _.debounce(() => {
    //   // console.log('___')
    //   this.gl.renderLoopGif()
    //   // console.log('I only get fired once every two seconds, max!')
    // }, 2000)
  }
  // computed: {
  //   ...mapGetters([
  //     'stageWidth',
  //     'stageHeight'
  //   ])
  // },
  // methods: {
  //   updateWidth (event) {
  //     this.$store.dispatch('updateStageSize', {width: event.target.value})
  //   },
  //   updateHeight (event) {
  //     this.$store.dispatch('updateStageSize', {height: event.target.value})
  //   }
  // }
}

</script>

<style lang="scss">

// @import "../styles/variables";

.webgl-canvas { 
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border: none;
  canvas {
    // display: none;
    background: #cccccc;
    
    // display: none;
    // &.canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    // }
    top: 0;
    left: 0;
    // transform-origin: center;
    transform-origin: top left;
    // transform: translate(50%, 50%)
  }
  .btn {
    background: #fafafa;
  }
}

</style>
