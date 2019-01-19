<template>
  <card-modal
    header="New Card"
    :deck-id="deckId"
  />
</template>

<script>
import CardModal from '~/components/CardModal.vue';

export default {
  components: {
    CardModal
  },
  computed: {
    deckId() {
      return Number(this.$route.params.id)
    }
  }
}
</script>
