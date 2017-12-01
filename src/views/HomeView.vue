<template>
  <div class="home-view">
    <div class="bg-gif"
         v-bind:style="{ 'background': bgUrl}"></div>
    <header class="header">  
      <h1> 
        <btn icon="mustache"></btn> 
        <span>Gif Maker</span>
      </h1>
    </header>
        <button @click="addFrame()">Add Frame</button>
        <button @click="renderGif()">Render GIF</button>


    <settings-form></settings-form>
    <webgl-canvas ref="canvas"></webgl-canvas>
    
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

import SettingsForm from './../components/SettingsForm.vue'
import WebGLCanvas from './../components/WebGLCanvas.vue'
import Btn from './../components/Btn.vue'

// import GIF from 'gif.js'
// console.log(GIF)

// let gif = new GIF({
//   workers: 0,
//   quality: 10
// })

// // const addFrame = () => {
// // }
// console.log(gif)
// URL.createObjectURL(blob)
/*
// add an image element
gif.addFrame(imageElement);

// or a canvas element
gif.addFrame(canvasElement, {delay: 200});

// or copy the pixels from a canvas context
gif.addFrame(ctx, {copy: true});

gif.on('finished', function(blob) {
  window.open(URL.createObjectURL(blob));
});

gif.render();
*/

export default {
  name: 'home-view',
  components: {
    'btn': Btn,
    'settings-form': SettingsForm,
    'webgl-canvas': WebGLCanvas
  },
  computed: {
    // ...mapGetters([
    //   'frameContext'
    // ]),
    bgUrl () {
      return 'url()'
    }
  },
  methods: {
    addFrame () {
      let img = new Image()
      img.src = document.querySelector('.webgl-canvas canvas').toDataURL()
      img.onload = () => {
        this.$store.dispatch('addFrame', img)
        // document.body.appendChild(img)
      }
    },
    renderGif () {
      this.$store.dispatch('renderGif')
    }
  }
}
</script>

<style lang="scss">

.home-view {
  header {
    min-height: 40px;

    .btn,
    h1 {
      display: inline-block;
      height: auto;
      vertical-align: center;
      margin: 0px;
    }
  }

  .bg-gif {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
  }
}

</style>
