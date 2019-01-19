<template>
  <div class="app">
    <toolbar />
    <sidebar />
    <div class="main">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Toolbar from "~/components/Toolbar.vue";
import Sidebar from "~/components/Sidebar.vue";

export default {
  components: { Toolbar, Sidebar }
};
</script>
