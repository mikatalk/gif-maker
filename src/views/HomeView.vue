<template>
  <div class="home-view">
    <settings-form></settings-form>
    <webgl-canvas></webgl-canvas>
  </div>
</template>

<script>

import SettingsForm from './../components/SettingsForm.vue'
import WebGLCanvas from './../components/WebGLCanvas.vue'

export default {
  name: 'home-view',
  components: {
    'settings-form': SettingsForm,
    'webgl-canvas': WebGLCanvas
  }
}
</script>

<style lang="scss">

</style>
