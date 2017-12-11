import * as types from './mutations-types'
import * as modes from './run-modes'

export default {
  [types.WINDOW_UPDATE_SIZE] (state, { size }) {
    state.window.width = size.width || state.window.width
    state.window.height = size.height || state.window.height
  },

  [types.UPDATE_FRAME_SIZE] (state, { size }) {
    state.frame.width = size.width || state.frame.width
    state.frame.height = size.height || state.frame.height
  },

  [types.UPDATE_SHADER_CODE] (state, { code }) {
    state.frame.shaderCode = code.code || state.frame.shaderCode
  },

  [types.RENDER_GIF] (state) {
    state.runMode = modes.RUN_MODE_PROCESSING
  },

  [types.PRESENT_GIF] (state, { blob }) {
    state.runMode = modes.RUN_MODE_GIF_READY
    state.frame.blob = blob.blob
  },

  [types.SET_RUN_MODE_DEFAULT] (state) {
    state.runMode = modes.RUN_MODE_DEFAULT
  },

  [types.APPROVE_SHADER] (state) {
    state.frame.shaderIsValid = true
  },

  [types.REJECT_SHADER] (state) {
    state.frame.shaderIsValid = false
  }
}
