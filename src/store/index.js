import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import tagsView from './modules/tagsview'
// import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    tagsView
  },
  getters
})

export default store
