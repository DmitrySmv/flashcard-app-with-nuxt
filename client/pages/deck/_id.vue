<template>
  <div>Deck '{{ deck.name }}'
    <nuxt-child />
  </div>
</template>

<script>
import NewCardModal from '~/components/new-card-modal';

export default {
  components: {
    NewCardModal
  },
  computed: {
    deck() {
      const deckId = Number(this.$route.params.id);
      const decks = this.$store.state.decks.list;

      return decks.find(deck => deck.id === deckId);
    }
  }
}
</script>
