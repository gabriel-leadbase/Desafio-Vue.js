<template>
  <q-page class="flex-center q-pa-md">
     <table-medicamentos/>
  </div>
  </q-page>
</template>

<script>

import TableMedicamentos from "./TableMedicamentos";

export default {
  components: {
      TableMedicamentos
  },
  name: 'PageIndex',
  data() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
}
</script>

<style lang="stylus">
.my-card
  width: 100%
  max-width: 350px
</style>
