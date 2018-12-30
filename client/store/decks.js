export const state = () => ({
  adding: false,
  list: []
})

export const mutations = {
  add (state, name) {
    state.list.push({
      id: state.list.length + 1,
      name
    })
  },

  showAddDeck(state) {
    state.adding = true;
  },

  hideAddDeck(state) {
    state.adding = false;
  }
}

export const actions = {
  add ({ commit }, name) {
    commit('add', name)
  },

  showAddDeck({ commit }) {
    commit('showAddDeck')
  },

  hideAddDeck({ commit }) {
    commit('hideAddDeck')
  }
}