<template>
  <div>
    <h1>{{deck.name}}</h1>
    <card v-for="card of cards" v-bind="card" :key="card.id" />
    <nuxt-child />
  </div>
</template>

<script>
import Card from '~/components/Card.vue';

export default {
  components: {
    Card
  },
  computed: {
    deckId() {
      return Number(this.$route.params.id);
    },
    deck() {
      const decks = this.$store.state.decks.list;

      return decks.find(deck => deck.id === this.deckId);
    },
    cards() {
      const cards = this.$store.state.cards.list;

      return cards.filter(card => card.deckId === this.deckId);
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
