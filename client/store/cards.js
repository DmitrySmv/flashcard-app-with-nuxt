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
});

export const mutations = {
  add(state, { deckId, front, back }) {
    state.list.push({
      id: state.list.length + 1,
      deckId: Number(deckId),
      front,
      back
    });
  },
  update(state, { id, deckId, front, back }) {
    state.list = state.list.map(card => {
      if (card.id === id && card.deckId === deckId) {
        card.front = front;
        card.back = back;
      }

      return card;
    });
  },
  delete(state, { deckId, id }) {
    state.list = state.list.filter(card => card.id !== id || card.deckId !== deckId );
  }
};

export const actions = {
  add({ commit }, data) {
    commit('add', data);
  },
  update({ commit }, data) {
    commit('update', data);
  },
  delete({ commit }, data) {
    commit('delete', data);
  }
};
