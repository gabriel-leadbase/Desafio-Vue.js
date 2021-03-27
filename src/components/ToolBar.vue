<template>
  <q-toolbar style="height:65px" class="bg-secondary text-white ">
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
      stretch
      :to="{ path: item.toPath }"
      class="q-mr-sm"
      flat
      :label="item.label"
    />
    <q-space></q-space>

    <q-input
      style="width: 300px;"
      outlined
      borderless
      dense
      rounded
      standout
      v-model="text"
      input-class="text-right"
      class="q-ml-md pa-m"
    >
      <template v-slot:append>
        <q-icon v-if="text === ''" name="search" />
        <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
      </template>
    </q-input>

    <q-btn dark flat round dense icon="chat" class="q-mr-xs" />
    <q-btn @click="handleClickLogout" flat round dense icon="logout" />
  </q-toolbar>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
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
    ...mapActions("auth", ["auth_logout"]),

    handleClickLogout() {
      this.auth_logout()
        .then(rsp => {
          this.$router.push({ path: "/" });
        })
        .catch(rsp => {});
    },
    changeDrawer() {
      this.setDrawer(!this.drawer);
    }
  }
};
</script>

<style></style>
