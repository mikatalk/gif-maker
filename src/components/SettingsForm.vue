<template>
  <div class="settings-form">
    <label>Width:</label>
    <input :value="frameWidth" 
           @input="updateWidth" 
           type="number" 
           max="1000" 
           maxlength="4"/>
    <br/>
    <label>Height:</label>
    <input :value="frameHeight" 
           @input="updateHeight" 
           type="number" 
           max="1000" 
           maxlength="4"/>
    
   <!--  <button @click="toggle=!toggle">Toggle</button>
    <transition name="demo">
      <h3 v-show="toggle">Toggle Transition</h3>
    </transition>
   -->
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'settings-form',

  data () {
    return {
      // toggle: true
    }
  },

  computed: {
    ...mapGetters([
      'frameWidth',
      'frameHeight'
    ])
  },

  methods: {
    updateWidth (event) {
      this.$store.dispatch('updateFrameSize', {width: event.target.value})
    },
    updateHeight (event) {
      this.$store.dispatch('updateFrameSize', {height: event.target.value})
    }
  }
}

</script>

<style lang="scss">

@import "../styles/variables";

.settings-form {
  

  /*
  .demo-enter-active {
    transition: all .8s ease;
  }
  .demo-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .demo-enter, 
  .demo-leave-to {
    transform: translateX(100px);
    opacity: 0;
  }
  */

//  background:black; color:white; font-family: Monospace;

}

</style>
