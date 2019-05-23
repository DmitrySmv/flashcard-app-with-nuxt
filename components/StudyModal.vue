<template>
  <div class="modal study-modal">
    <nuxt-link class="btn close" :to="`/deck/${deckId}`">⨯</nuxt-link>

    <div v-if="card" class="study-card">
      <div :class="showBack ? 'front hide' : 'front'">
        <div>
          <p>{{card.front}}</p>
        </div>
        <button @click="onFlip">Flip</button>
      </div>

      <div :class="showBack ? 'back': 'back hide'">
        <div>
          <p>{{card.back}}</p>
        </div>
        <p>How did you do?</p>
        <p>
          <button @click="onStudied(card.id, Math.max(card.score - 1, 1))">Poorly</button>
          <button @click="onStudied(card.id, card.score)">Okay</button>
          <button @click="onStudied(card.id, Math.min(card.score + 1, 3))">Great</button>
        </p>
      </div>
    </div>

    <div v-else class="no-cards">
      <p>You have no cards to study in this deck right now. Good job!</p>
    </div>
  </div>
</template>

<script>
const MS_IN_DAY = 86400000;

export default {
  props: {
    deckId: Number
  },
  data() {
    return {
      showBack: false
    };
  },
  computed: {
    card() {
      return this.$store.state.cards.list
        .filter(
          card => card.deckId === this.deckId &&
          (!card.lastStudiedOn || (new Date() - card.lastStudiedOn) / MS_IN_DAY >= card.score)
        )[0]
    }
  },
  methods: {
    onFlip() {
      this.showBack = true;
    },
    onStudied(cardId, score) {
      const now = new Date();

      now.setHours(0, 0, 0, 0);

      this.$store.dispatch("cards/update", {
        id: cardId,
        deckId: this.deckId,
        score,
        lastStudiedOn: +now
      });

      this.showBack = false;
    }
  }
};
</script>
