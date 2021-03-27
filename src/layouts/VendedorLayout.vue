<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-black">
      <ToolBar
        InitialPagetoPath="/vendedor"
        :setDrawer="setDrawer"
        :drawer="drawer"
      />
    </q-header>
    <Drawer :setDrawer="setDrawer" :drawer="drawer" />
    <q-page-container>
      <q-page>
        <!-- here we render the pages in pages folder -->
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Drawer from "components/Drawer";
import ToolBar from "components/ToolBar";

export default {
  components: {
    Drawer,
    ToolBar
  },

  data() {
    return {
      text: "",
      drawer: false,
      leftDrawerOpen: false
    };
  },
  methods: {
    setDrawer(value) {
      this.drawer = value;
    }
  },
  computed: {
    smallWindowSize() {
      return this.$q.screen.lt.sm ? true : false;
    }
  }
};
</script>

<style lang="stylus"></style>
