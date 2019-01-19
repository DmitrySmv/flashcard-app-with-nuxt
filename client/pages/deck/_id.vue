<template>
  <div>Deck '{{ deck.name }}'
    <nuxt-child />
  </div>
</template>

<script>
export default {
  computed: {
    deck() {
      const deckId = Number(this.$route.params.id);
      const decks = this.$store.state.decks.list;

      return decks.find(deck => deck.id === deckId);
    }
  }
}
</script>
