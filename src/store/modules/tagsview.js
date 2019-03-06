const tagView = {
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
    }
  }
}

export default tagView
