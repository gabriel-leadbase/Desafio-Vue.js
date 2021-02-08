<template>
  <b-navbar
    variant="primary"
    class="navbar h-100 fixed-top primary-navbar flex-column"
  >
    <router-link to="/home">
      <b-img
        alt="home"
        height="25"
        class="ml-3 mt-3"
        width="auto"
        :src="require('../assets/G-Pharm.png')"
      ></b-img>
    </router-link>
    <hr class="linha mb-4" />
    <div class="bt-route" @click="pushRouter('home')">
      <b-icon-graph-up variant="light mr-2"></b-icon-graph-up>
      <span class="text-light">Dashboard</span>
    </div>
    <hr class="linha mb-4" />
    <div @click="pushRouter('medicines')" class="bt-route">
      <b-icon-bag-plus variant="light mt-0 mr-2"></b-icon-bag-plus>
      <span class="text-light">Medicamentos</span>
    </div>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    pushRouter(name) {
      if(this.$route.name !== name) {
        this.$router.push(name)
      }
    }
  }
};
</script>

<style scoped>
.primary-navbar {
  width: 224px !important;
}

.linha {
  height: 0.2px !important;
  border-radius: 0.2rem;
  width: 200px;
  background-color: rgb(167, 185, 243) !important;
}

.bt-route:hover {
  cursor: pointer;
}
</style>