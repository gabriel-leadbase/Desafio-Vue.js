<template>
  <div>
    <PrimaryNavbar />
    <SecondaryNavbar />
    <router-view />
  </div>
</template>

<script>
import PrimaryNavbar from "../components/PrimaryNavbar.vue";
import SecondaryNavbar from "../components/SecondaryNavbar.vue";
export default {
  name: "Default",
  components: {
    PrimaryNavbar,
    SecondaryNavbar
  },
};
</script>

<style>
</style>