<template>
  <div class="webgl-canvas" ref="container" @click="renderGIF()">
    <canvas ref="canvas"
            :width="frameWidth" 
            :height="frameHeight"
            >
    </canvas>

    <btn icon="mustache"></btn>
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
      // toggle: true
      // canvasScale: 1
      gl: this.gl
    }
  },

  computed: {
    ...mapGetters([
      'frameWidth',
      'frameHeight',
      'shaderCode'
    ])
  },

  mounted () {
    // console.log('OK?', this.shaderCode)
    this.gl = new GLLayer(this.$refs.canvas, this.shaderCode)
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
    frameWidth (newWidth, oldWidth) {
      this.handleResize()
    },
    frameHeight (newHeight, oldHeight) {
      this.handleResize()
    },
    shaderCode (newCode, oldCode) {
      // return _.debounce((newCode, oldCode) => {
      console.log('REFRESH')
      // (newCode, oldCode) {
      this.gl.updateShaderCode(this.shaderCode)
      // }, 2000)
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
      requestAnimationFrame(() => this.tick())
      let time = performance.now()
      this.gl.update(time, this.pageScrollRatio)
    },

    handleResize () {
      this.$refs.canvas.width = this.frameWidth
      this.$refs.canvas.height = this.frameHeight
      this.gl.handleResize(this.frameWidth, this.frameHeight)
    },

    renderGIF () {
      this.gl.renderLoopGif(performance.now())
    }
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
  margin: 10px 0;
  padding: 0;
  border: none;
  canvas{
    background: #cccccc;
    display: none;
  }
  .btn {
    background: #fafafa;
  }
}

</style>
