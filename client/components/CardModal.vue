<template>
  <div class="modal" @keyup.ctrl.enter="saveCard">
    <h1>{{header}}</h1>

    <label>Card Front:</label>
    <textarea v-model="front"></textarea>

    <label>Card Back:</label>
    <textarea v-model="back"></textarea>
    <p>
      <button @click="saveCard">Save Card</button>
      <nuxt-link tag="button" class="btn" :to="`/deck/${deckId}`">Cancel</nuxt-link>

      <button v-if="editMode" @click="deleteCard" class="delete">Delete Card</button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    deckId: Number,
    header: String,
    card: Object
  },
  data() {
    return {
      id: (this.card && this.card.id) || "",
      front: (this.card && this.card.front) || "",
      back: (this.card && this.card.back) || "",
      editMode: Boolean(this.card)
    };
  },
  methods: {
    saveCard() {
      if (this.editMode) {
        this.$store.dispatch("cards/update", this);
      } else {
        this.$store.dispatch("cards/add", this);
      }

      this.$router.push(`/deck/${this.deckId}`);
    },
    deleteCard() {
      this.$store.dispatch("cards/delete", this);

      this.$router.push(`/deck/${this.deckId}`);
    }
  }
};
</script>
