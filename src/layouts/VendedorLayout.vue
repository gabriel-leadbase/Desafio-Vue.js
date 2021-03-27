<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-black">
      <ToolBar
        :itensToolBar="itemsDrawerToolBar"
        :setDrawer="setDrawer"
        :drawer="drawer"
      />
    </q-header>
    <Drawer
      :itensDRawer="itemsDrawerToolBar"
      :setDrawer="setDrawer"
      :drawer="drawer"
    />
    <q-page-container>
      <q-page>
        <!-- here we render the pages in pages folder -->
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import itemsDrawerToolBar from "./data/VendedorDrawerToolBarItens";
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
      itemsDrawerToolBar: itemsDrawerToolBar,
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
