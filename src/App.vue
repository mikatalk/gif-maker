<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>

// import debounce from 'lodash/debounce'
// import resize from 'vue-resize-directive'
export default {

  name: 'app',

  // components: {
  // },

  // directives: {
  //   resize
  // },

  // computed: {
  //   ...mapGetters([
  //     'stageWidth',
  //     'stageHeight'
  //   ])
  // }

  created () {
    window.addEventListener('resize', () => this.handleResize())
    this.handleResize()
  },

  // destroyed () {
  // },

  methods: {
    handleResize () {
      let size = {
        width: window.innerWidth,
        height: window.innerHeight
      }
      this.$store.dispatch('windowUpdateSize', size)
    }
  }
}

</script>


<style lang="scss">

// @import "styles/variables";

body {
  background: #fafafa;
  font-family: Monospace;


input {
  font-family:"Roboto";
    font-size: 13px;
    line-height: 1.3;
    border: 0;
    height: 30px;
    width:100%;
    background-image: linear-gradient(#D2D2D2, #D2D2D2);
    background-size: 100% 2px;
    background-repeat: no-repeat;
    background-position: center bottom;
}

input:focus {
    background-image: linear-gradient(#009587, #009587), linear-gradient(#D2D2D2, #D2D2D2);
    animation: input 0.5s forwards;
    box-shadow: none;
    outline: 0;
    background-size: 0% 2px;
}
/* LABEL ======================================= */

label {
  color: #9e9e9e;    
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 5px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
/* active state */
input:focus ~ label,
input:valid ~ label {
  top: -10px;
  font-size: 90%;
  color: #009587;
}

/* ANIMATIONS ================ */


@keyframes input {
    0% {
        background-size: 0% 2px, 100% 2px;
    }
    100% {
        background-size: 100% 2px, 100% 2px;
    }
}
}

</style>
