<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>

export default {

  name: 'app'

  // components: {
  // },

  // directives: {
  // },

  // computed: {
  //   ...mapGetters([
  //     'stageWidth',
  //     'stageHeight'
  //   ])
  // }

  // mounted () {
  // },

  // destroyed () {
  // },

  // methods: {
  // }
}
</script>


<style lang="scss">

// @import "styles/variables";

body {
  background: #fafafa;
  font-family: Monospace;
}

</style>
