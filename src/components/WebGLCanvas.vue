<template>
  <div class="webgl-canvas" ref="container">
    <canvas ref="canvas" v-bind:style="{ transform: 'scale('+canvasScale+')'}" :width="frameWidth" :height="frameHeight"></canvas>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'webgl-canvas',

  data () {
    return {
      // toggle: true
      canvasScale: 1
    }
  },

  computed: {
    ...mapGetters([
      'frameWidth',
      'frameHeight'
    ])

  },

  watch: {
    frameWidth (newValue, oldValue) {
      // console.log('::>')
      // this.canvasScale = 0.2
      // TO DO adjust scale to fit window

    }
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
  // overflow: hidden;
  margin: 10px 0;
  padding: 0;
  border: none;
  canvas{
    background: #cccccc;
display: block;

//tra

    margin: auto;
  //  width: 100vw;
  //  height: 100vh;
  }
}


</style>
