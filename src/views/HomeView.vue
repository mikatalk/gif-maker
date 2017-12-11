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
    <section class="overlay" v-show="isProcessing">
      <spinner show=true></spinner>
    </section>
    <section 
      class="overlay" 
      v-show="isPresenting">
      <img ref="gif"/>
      <div class="close-btn" @click="closeModal"/>
    </section>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import Spinner from './../components/Spinner.vue'
import CodeEditor from './../components/CodeEditor.vue'
import WebGLCanvas from './../components/WebGLCanvas.vue'
import Btn from './../components/Btn.vue'

export default {
  name: 'home-view',
  // data () {
  //   return {
  //     test: true
  //   }
  // },
  components: {
    'btn': Btn,
    'code-editor': CodeEditor,
    'webgl-canvas': WebGLCanvas,
    'spinner': Spinner
  },
  computed: {
    ...mapGetters([
      'frameWidth',
      'frameHeight',
      'isPortrait',
      'isLandscape',
      'isProcessing',
      'isPresenting',
      'frameBlob'
    ])
  },
  watch: {
    isPresenting (newState) {
      if (newState && this.frameBlob) {
        this.$refs.gif.src = this.frameBlob
      }
    }
  },
  methods: {
    updateWidth (event) {
      this.$store.dispatch('updateFrameSize', {width: event.target.value})
    },
    updateHeight (event) {
      this.$store.dispatch('updateFrameSize', {height: event.target.value})
    },
    renderGif () {
      this.$store.dispatch('renderGif')
    },
    closeModal () {
      this.$store.dispatch('setRunModeDefault')
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
    .preview-inner {

    }
  }

  .overlay {
    left: 0;
    right: 0;
    top: -100px;
    bottom: -100px;
    position: fixed;
    box-sizing: border-box;
    background: rgba(0, 0, 0, .96);
    display: flex;
    justify-content: center;
    align-items: center;
    .close-btn {
      position: fixed;
      top: 10px;
      right: 20px;
      width: 20px;
      height: 30px;
      border-radius: 5px;
      transition: all ease 250ms;
      background: rgba(255, 255, 255, 0);
      cursor: pointer; 
      &:hover {
        background: rgba(255, 255, 255, .8);
      }
      &:before,
      &:after {
        content: ' ';
        display: block;
        position: absolute;
        background: white;
        width: 3px;
        height: 20px;
        left: 12.5px;
        top: 5px;
        transform-origin: center;
        transform: rotate(45deg);
        border: 1px solid black;
      }
      &:after {
        transform: rotate(-45deg);        
      }
    }
  }
}
img {
  float: left;
  margin: 5px
}

</style>
