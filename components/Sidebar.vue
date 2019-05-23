<template>
  <div class="sidebar">
    <h2>All Decks</h2>
    <ul>
      <li v-for="deck in decks" :key="deck.id">
        <nuxt-link :to="'/deck/' + deck.id">{{ deck.name }}</nuxt-link>
      </li>
    </ul>
    <input ref="createDeckInput" v-if="$store.state.decks.adding" @keypress.enter="createDeck">
  </div>
</template>

<script>
export default {
  updated() {
    this.$nextTick(() => {
      const el = this.$refs.createDeckInput;

      el && el.focus();
    })

  },
  computed: {
    decks () {
      return this.$store.state.decks.list
    }
  },
  methods: {
    createDeck(event) {
      this.$store.dispatch('decks/add', event.target.value);
      this.$store.dispatch('decks/hideAddDeck');

      const createdDeck = this.$store.state.decks.list.slice(-1)[0];

      this.$router.push(`/deck/${createdDeck.id}`);
    }
  }
};
</script>
