<template>
  <div class="holder">
    <div class="content">
      <h3 class="q-ma-none">Entrar como:</h3>
      <q-btn label="Administrador" color="primary" class="full-w q-mb-md q-mt-lg" @click="$router.push('/adm')"/>
      <q-btn label="Vendedor" color="secondary" class="full-w" @click="$router.push('/salesMan')"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
.full-w{
  width: 100%;
}

.holder{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #79a9fa;
}

.content{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 95vh;
  width: 95vw;
  background: #e6e6e6;
  border-radius: 6px;
  box-shadow: 0 2px 12px rgba($color: #000000, $alpha: .25);
  padding: 16px;
}

@media (min-width: 1024px) {
  .content{
    height: 100%;
    width: 500px;
  }
}
</style>