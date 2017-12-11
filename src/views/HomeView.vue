<template>
  <div class="home-view" 
       v-bind:class="{ portrait: isPortrait, landscape: isLandscape }">
    <section class="ui">
      <span>Res:</span>
      <input class="for-frame-width" 
            :value="frameWidth" 
            @input="updateWidth" 
            type="number" 
            max="1000" 
            maxlength="4"/>
      <span> x </span>
      <input class="for-frame-height" 
            :value="frameHeight" 
            @input="updateHeight" 
            type="number" 
            max="1000" 
            maxlength="4"/>
      <button @click="renderGif()">GIF</button>
      <code-editor></code-editor>
  </section>
  <section class="preview">
    <webgl-canvas ref="canvas"></webgl-canvas>
  </section>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CodeEditor from './../components/CodeEditor.vue'
import WebGLCanvas from './../components/WebGLCanvas.vue'
import Btn from './../components/Btn.vue'

export default {
  name: 'home-view',
  components: {
    'btn': Btn,
    'code-editor': CodeEditor,
    'webgl-canvas': WebGLCanvas
  },
  computed: {
    ...mapGetters([
      'frameWidth',
      'frameHeight',
      'isPortrait',
      'isLandscape'
      // 'shaderCode'
    ])
  },
  methods: {
    updateWidth (event) {
      this.$store.dispatch('updateFrameSize', {width: event.target.value})
    },
    updateHeight (event) {
      this.$store.dispatch('updateFrameSize', {height: event.target.value})
    },
    // addFrame () {
    //   let img = new Image()
    //   img.src = document.querySelector('.webgl-canvas canvas').toDataURL()
    //   img.onload = () => {
    //     this.$store.dispatch('addFrame', img)
    //     // document.body.appendChild(img)
    //   }
    // },
    renderGif () {
      console.log('### TODO ### move render to state')
      // this.$store.dispatch('renderGif')
    }
  }
}
</script>

<style lang="scss">

.home-view {


  &.portrait {
    .ui,
    .preview {
      width: 100vw;
      height: 50vh;
  
  }
  }
  &.landscape {
    .ui,
    .preview {
      width: 50vw;
      height: 100vh !important;
      min-height: 100vh !important;
      max-height: 100vh !important;
    }
  }

  .ui {
    height: 50vh;
    position: fixed;
    top: 0;
    left: 0;
// border: 5px solid red;
box-sizing: border-box;
    // header {
    //   min-height: 40px;

    //   .btn,
    //   h1 {
    //     display: inline-block;
    //     height: auto;
    //     vertical-align: center;
    //     margin: 0px;
    //   }
    // }

    // input[ref=inputFrameWidth] 
    input.for-frame-width,
    input.for-frame-height {
      width: 50px;
      text-align: center;
    }
  }

  .preview {
    height: 50vh;
    position: fixed;
    bottom: 0;
    right: 0;
//  border: 5px solid yellow;
  box-sizing: border-box;
     
  }

  // .bg-gif {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   width: 100vw;
  //   height: 100vh;
  //   pointer-events: none;
  // }
  // .gif-bg {
  //   position: fixed;
  //   left: 0;
  //   top: 0;
  //   width: 100vw;
  //   height: 100vh;
    
  // }
}
img {
  float: left;
  margin: 5px
}

</style>
