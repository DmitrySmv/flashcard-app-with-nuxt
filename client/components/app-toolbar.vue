<template>
  <div class="toolbar">
    <div>
      <button @click="showAddDeck">✚ New Deck</button>
    </div>
    <div v-if="deckId">
      <nuxt-link class="btn" :to="`/deck/${deckId}/new`">✚ New Card</nuxt-link>
      <nuxt-link class="btn" :to="`/deck/${deckId}/study`">Study Deck</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    deckId() {
      return this.$route.params.id;
    }
  },
  methods: {
    showAddDeck() {
      this.$store.dispatch("decks/showAddDeck");
    }
  }
};
</script>
