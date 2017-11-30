import * as types from './mutations-types'

export default {
  [types.UPDATE_FRAME_SIZE] (state, { size }) {
    state.frame.width = size.width || state.frame.width
    state.frame.height = size.height || state.frame.height
  }
}
