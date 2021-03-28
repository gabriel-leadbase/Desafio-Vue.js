<template>
  <q-layout>
    <q-header>
      <q-toolbar style="height:65px" class="bg-secondary text-white">
        <q-toolbar-title>
          Desafio-Vue.js
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <router-view />
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>
