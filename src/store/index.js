import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import ui from './ui'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export function createStore () {
  return new Vuex.Store({
    state: {},
    actions: {},
    mutations: {},
    getters: {},
    modules: {
      ui
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
  })
}
