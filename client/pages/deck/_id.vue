<template>
  <div>Deck '{{ deck.name }}'
    <new-card-modal :deck-id="deck.id" />
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
