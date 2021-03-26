<template>
  <q-card
    @click="onCardClick"
    style="max-height: 150px"
    class="my-card bg-secondary text-white cursor-pointer"
  >
    <q-card-section class="q-pt-sm">
      <div class="text-h6 ellipsis">{{ item.title }}</div>
    </q-card-section>

    <q-card-section>
      <div class="ellipsis">{{ item.content }}</div>
    </q-card-section>

    <q-separator dark />
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
    onCardClick() {
      this.item.path ? this.$router.push({ path: this.item.path }) : "";
    }
  }
};
</script>

<style lang="sass" scoped>
.my-card
</style>
