<template>
  <div class="app">
    <app-toolbar/>
    <app-sidebar/>
    <div class="main">
      <nuxt />
    </div>
  </div>
</template>

<script>
import AppToolbar from "~/components/app-toolbar";
import AppSidebar from "~/components/app-sidebar";

export default {
  components: { AppToolbar, AppSidebar }
};
</script>
