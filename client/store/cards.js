const mockCards = [
  {
    id: 1,
    deckId: 1,
    front: 'milk',
    back: 'молоко'
  }
];

export const state = () => ({
  list: mockCards
})

export const mutations = {
  add (state, { deckId, front, back }) {
    state.list.push({
      id: state.list.length + 1,
      deckId: Number(deckId),
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