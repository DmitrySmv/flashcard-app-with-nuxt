<template>
  <new-card-modal :deck-id="deckId" />
</template>

<script>
import NewCardModal from '~/components/NewCardModal.vue';

export default {
  components: {
    NewCardModal
  },
  computed: {
    deckId() {
      return Number(this.$route.params.id)
    }
  }
}
</script>
