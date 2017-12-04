import * as types from './mutations-types'

export default {
  updateFrameSize ({ commit }, size) {
    commit(types.UPDATE_FRAME_SIZE, { size })
  },
  // addFrame ({ commit }, image) {
  //   commit(types.ADD_FRAME, { image })
  // },
  // renderGif ({ commit }) {
  //   commit(types.RENDER_GIF)
  // },
  updateShaderCode ({ commit }, code) {
    commit(types.UPDATE_SHADER_CODE, { code })
  }
}
