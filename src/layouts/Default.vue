<template>
  <div class="default-container">
    <q-layout view="hhh lpr fff">
      <q-page-container>
        <q-page>
          <router-view class="container-content absolute-center shadow-2 rounded-borders"/>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>

export default {
  name: 'Login'
}
</script>

<style scoped>
  .default-container{
    background: #f1f8e9;
  }
  .container-content{
    width: 350px;
    background: #dcedc8;
  }
</style>