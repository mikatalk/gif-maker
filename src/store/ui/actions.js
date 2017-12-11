import * as types from './mutations-types'

export default {
  windowUpdateSize ({ commit }, size) {
    commit(types.WINDOW_UPDATE_SIZE, { size })
  },
  updateFrameSize ({ commit }, size) {
    commit(types.UPDATE_FRAME_SIZE, { size })
  },
  renderGif ({ commit }) {
    commit(types.RENDER_GIF)
  },
  setRunModeDefault ({ commit }) {
    commit(types.SET_RUN_MODE_DEFAULT)
  },
  presentGif ({ commit }, blob) {
    commit(types.PRESENT_GIF, { blob })
  },
  updateShaderCode ({ commit }, code) {
    commit(types.UPDATE_SHADER_CODE, { code })
  }
}
