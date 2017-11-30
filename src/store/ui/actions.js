import * as types from './mutations-types'

export default {
  updateFrameSize ({ commit }, size) {
    commit(types.UPDATE_FRAME_SIZE, { size })
  }
}
