<template>
  <q-card
    @click="handleCardClick(item)"
    style="max-height: 200px"
    class="my-card text-black cursor-pointer"
  >
    <q-card-section>
      <div class="text-h6 ellipsis">{{ item.title }}</div>
    </q-card-section>

    <q-card-section style="height: 70px">
      <div class="ellipsis">{{ item.content }}</div>
    </q-card-section>

    <q-separator dark />

    <q-card-actions align="right" class=" my-card bg-secondary text-white">
      <q-btn :to="{ path: item.path }" flat>Acessar</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: []
    }
  },
  name: "EssentialLink",
  data() {
    return {
      expanded: false,
      lorem:
        " quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  methods: {
    itemDetails() {
      console.log("detalhe");
    },
    handleCardClick(item) {
      this.$router.push({ path: item.path });
    }
  }
};
</script>

<style lang="sass" scoped>
.my-card
</style>
