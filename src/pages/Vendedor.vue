<template>
  <q-page class="flex-center">
    <div class="q-pa-lg col-xs-12 col-sm-4 col-md-3 col-lg-3">
      <medicamentos />
    </div>
  </q-page>
</template>

<script>
import Medicamentos from "./../components/Vendedor/Medicamentos";
export default {
  components: {
    Medicamentos
  },
  name: "PageIndex",
  data() {
    return {
      listItens: [],
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
};
</script>

<style lang="stylus">
.my-card
  width: 100%
  max-width: 350px
</style>
