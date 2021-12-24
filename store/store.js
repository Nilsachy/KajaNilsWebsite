const store = {
  state: {
    opened: false
  },

  getters: {
    getOpened: (state) => {
      return state.opened
    }
  },

  mutations: {
    updateOpened (state, opened) {
      state.opened = opened
    }
  },

  actions: {
    updateOpened ({ commit }, opened) {
      console.log('Updated opened')
      commit('updateOpened', opened)
    }
  }
}

export default store
