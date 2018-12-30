export const state = () => ({
  list: []
})

export const mutations = {
  add (state, { deckId, front, back }) {
    state.list.push({
      id: state.list.length + 1,
      deckId,
      front,
      back
    })
  }
}

export const actions = {
  add ({ commit }, data) {
    commit('add', data)
  }
}