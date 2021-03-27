<template>
  <q-toolbar class="bg-secondary text-white ">
    <q-btn
      v-if="smallWindowSize"
      flat
      @click="changeDrawer"
      round
      dense
      icon="menu"
    />
    <q-btn
      v-for="item in itensToolBar"
      :key="item.id"
      v-if="!smallWindowSize"
      :to="{ path: item.toPath }"
      class="q-mr-sm"
      flat
      :label="item.label"
    />
    <q-space></q-space>

    <q-input
      style="width: 300px; height:65px"
      outlined
      borderless
      dense
      rounded
      standout
      v-model="text"
      input-class="text-right"
      class="q-ml-md"
    >
      <template v-slot:append>
        <q-icon v-if="text === ''" name="search" />
        <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
      </template>
    </q-input>

    <q-btn dark flat round dense icon="chat" class="q-mr-xs" />
    <q-btn :to="{ path: '/login' }" flat round dense icon="logout" />
  </q-toolbar>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false
    },
    itensToolBar: Array,
    setDrawer: Function
  },
  data() {
    return {
      text: ""
    };
  },
  computed: {
    smallWindowSize() {
      return this.$q.screen.lt.sm ? true : false;
    }
  },
  mounted() {},
  methods: {
    changeDrawer() {
      this.setDrawer(!this.drawer);
    }
  }
};
</script>

<style></style>
