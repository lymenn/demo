const tagsView = {
  state: {
    visitedViews: [],
    cachedViews: []
  },
  mutations: {
    ADD_VISITED_VIEW: (state, view) => {
      if (state.visitedViews.some(item => item.path === view.path)) return
      state.visitedViews.push(Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      }))
    },
    ADD_CACHED_VIEW: (state, view) => {
      if (state.cachedViews.some(item => item.path === view.path)) return
      state.cachedViews.push(Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      }))
    },
    DEL_VISITED_VIEW: (state, view) => {
      state.visitedViews.splice(state.visitedViews.findIndex((item) => item.path === view.path))
    },
    DEL_CACHED_VIEW: (state, view) => {
      state.cachedViews.splice(state.visitedViews.findIndex((item) => item.path === view.path))
    }
  },
  actions: {
    addView ({dispatch}, view) {
      dispatch('addVisitedView', view)
      dispatch('addCachedView', view)
    },
    addVisitedView ({commit}, view) {
      commit('ADD_VISITED_VIEW', view)
    },
    addCachedView ({commit}, view) {
      commit('ADD_CACHED_VIEW', view)
    },
    delView ({dispatch}, view) {
      dispatch('delVisitedView', view)
      dispatch('delCachedView', view)
    },
    delVisitedView ({commit}, view) {
      commit('DEL_VISITED_VIEW', view)
    },
    delCachedView ({commit}, view) {
      commit('DEL_CACHED_VIEW', view)
    }
  }
}

export default tagsView
