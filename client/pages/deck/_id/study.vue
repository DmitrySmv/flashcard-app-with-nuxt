<template>
  <study-modal
    :deck-id="deckId"
  />
</template>

<script>
import StudyModal from '~/components/StudyModal.vue';

export default {
  components: {
    StudyModal
  },
  computed: {
    deckId() {
      return Number(this.$route.params.id)
    }
  }
}
</script>
