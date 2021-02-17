<template>
  <div class="holder">
    <div class="adm_content">
      <div class="greetings generic_body q-mb-md">
        <h3 class="q-ma-none">Olá Administrador</h3>
        <h6 class="q-ma-none q-mt-md">Veja abaixo alguns insights da sua farmácia:</h6>
      </div>

      <Stock
        class="q-mb-md"
        :data="getStock"
      />

      <Sells
        :data="getSells"
        class="q-mb-md"
      />

      <ChartSells
        :data="getSells"
      />
    </div>
  </div>
</template>

<script>
import ChartSells from '../components/Adm/ChartSells'
import Sells from '../components/Adm/Sells'
import Stock from '../components/Common/Stock'
import { mapGetters } from 'vuex'

export default {
  name: 'Admin',
  components: {
    Stock,
    Sells,
    ChartSells
  },
  computed: {
    ...mapGetters(['getSells', 'getTodaySells', 'getStock'])
  }
}
</script>

<style lang="scss">
.adm_content{
  padding: 12px;
}

.greetings {
  h3{
    font-size: 2.1rem;
  }
  h6{
    line-height: 1.2;
  }
}

</style>