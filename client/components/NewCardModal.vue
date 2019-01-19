<template>
  <div class="modal">
    <h1> New Card </h1>
      <label> Card Front: </label>
      <textarea v-model="front"></textarea>
      <label> Card Back: </label>
      <textarea v-model="back"></textarea>
      <p>
        <button @click="saveCard">
          Save Card
        </button>
        <nuxt-link tag="button" className='btn' :to="`/deck/${deckId}`">
          Cancel
        </nuxt-link>
      </p>
  </div>
</template>

<script>
export default {
  props: ['deckId'],
  data: {
    front: '',
    back: ''
  },
  methods: {
    saveCard() {
      this.$store.dispatch('cards/add', this);
    }
  }
}
</script>
