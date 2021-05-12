<template>
  <q-layout view="lHh Lpr lFf">
    <q-header 
      elevated 
      class="bg-light-green-6">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Fármacos
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <div class="container-user">
        <q-avatar 
          class="q-ma-sm" 
          size="100px" 
          font-size="52px" 
          color="teal" 
          text-color="white" 
          icon="directions"/>
        <div class="container-user-info">
          <p class="user-name">{{ user.name }}</p>
          <p v-if="user.permission" class="user-permission">Administrador</p>
          <p v-else class="user-permission">Vendedor</p>
        </div>
      </div>
      
      
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import $store from 'src/store/user.js'
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Logout',
    icon: 'logout',
    link: ''
  },
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      user: {},
      leftDrawerOpen: false,
      essentialLinks: linksData,
    }
  },

  created(){
    this.user = $store.state.user == null ? null : $store.state.user
  }
}
</script>

<style>
  .container-user{
    display: flex;
  }

  .container-user-info{
    padding: 10px;
  }
  .container-user-info p{
    margin-bottom: 10px;
  }

  .user-name{
    font-weight: bold;
    font-size: 15px;
  }

  .user-permission{
    font-size: 12px;
  }

</style>
