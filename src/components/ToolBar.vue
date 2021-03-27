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
      v-if="!smallWindowSize"
      :to="{ path: InitialPagetoPath }"
      class="q-mr-sm"
      flat
      label="Página inicial"
    />
    <q-btn
      v-if="!smallWindowSize"
      class="q-mr-sm"
      flat
      label="Tabelas Vendedor"
    />
    <q-btn v-if="!smallWindowSize" class="q-mr-sm" flat label="Seguindo" />
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
    <q-btn flat round dense icon="logout" />
  </q-toolbar>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false
    },
    InitialPagetoPath: String,
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
