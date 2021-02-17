<template>
  <div class="holder">
    <div class="adm_content">

      <div class="sales generic_body q-mb-md">
        <div v-if="!responsible">
          <h6 class="q-ma-none">Quem está vendendo?</h6>
          <select v-model="responsible">
            <option value="João da Silva">João da Silva</option>
            <option value="Pedro da Silva">Pedro da Silva</option>
          </select>
        </div>

        <div v-if="responsible">
          <h6 class="q-ma-none q-mb-md">Seja Bem-vindo <span class="responsible">{{responsible}}</span></h6>
          <div style="display: flex; justify-content: flex-end">
            <q-btn label="Trocar vendedor" @click="responsible = 0" color="warning" text-color="black" dense/>
          </div>
        </div>
      </div>

      <Stock
        :data="getStock"
        class="q-mb-md"
      />

      <RegisterSale
        :responsible="responsible"
      />
    </div>
  </div>
</template>

<script>
import RegisterSale from '@/components/SalesMan/RegisterSale'
import Stock from '@/components/Common/Stock'
import { mapGetters } from 'vuex'

export default {
  name: 'SalesMan',
  components: {
    Stock,
    RegisterSale
  },
  data () {
    return {
      responsible: ''
    }
  },
  computed: {
    ...mapGetters(['getStock'])
  }
}
</script>

<style lang="scss">
.sales{
  select{
    margin: 12px 0 0;
    padding: 2px 6px;
    width: 100%;
    border-radius: 6px;
    border: none;
    outline: none;
    box-shadow: 0 0 3px rgba(0, 0, 0, .65);
    font-weight: 500;
    font-size: 1.3em;
  }
}

.responsible{
  font-weight: 700;
  color: #1d1d1d;
}
</style>