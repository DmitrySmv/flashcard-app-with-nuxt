<template>
  <div class='card'>
    <div>
      <p>{{front}}</p>
      <nuxt-link class='btn' :to="`/deck/${deckId}/card/${id}/edit`">Edit</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    deckId: Number,
    front: String
  }
}
</script>
