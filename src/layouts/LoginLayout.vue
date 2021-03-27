<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="height:65px" class="bg-secondary text-white  ">
        <q-toolbar-title>
          Login
        </q-toolbar-title>
        <div></div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
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
