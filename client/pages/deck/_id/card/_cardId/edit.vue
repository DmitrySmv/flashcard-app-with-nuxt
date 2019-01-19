<template>
  <card-modal header="Edit Card" :deck-id="deckId" :card="card"/>
</template>

<script>
import CardModal from "~/components/CardModal.vue";

export default {
  components: {
    CardModal
  },
  computed: {
    deckId() {
      return Number(this.$route.params.id);
    },
    cardId() {
      return Number(this.$route.params.cardId);
    },
    card() {
      return this.$store.state.cards.list.find(card => card.id === this.cardId);
    }
  }
};
</script>
