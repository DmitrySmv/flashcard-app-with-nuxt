const mockCards = [
  {
    id: 1,
    deckId: 1,
    front: 'milk',
    back: 'молоко',
    score: 1,
    lastStudiedOn: null
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
      back,
      score: 1,
      lastStudiedOn: null
    });
  },
  update(state, { id, deckId, front, back, score, lastStudiedOn }) {
    state.list = state.list.map(card => {
      if (card.id === id && card.deckId === deckId) {
        card.front = front || card.front;
        card.back = back || card.back;
        card.score = score || card.score;
        card.lastStudiedOn = lastStudiedOn || card.lastStudiedOn;
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
