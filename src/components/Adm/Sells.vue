<template>
  <div class="generic_body sells_body">
    <h5 class="q-mt-none q-mb-md">Suas vendas</h5>

    <div class="select_holder">
      <select v-model="type">
        <option value="all">Todas as vendas</option>
        <option value="today">Vendas Hoje</option>
        <option value="seller">Por vendedor</option>
      </select>

      <select v-model="seller" v-if="type === 'seller'">
        <option v-for="(item, index) in sellerOptions" :key="index" :value="item">{{item}}</option>
      </select>

    </div>

    <div class="grid_sells sells_header">
      <p>Vendedor</p>
      <p>Valor</p>
      <p>Dia</p>
    </div>
    <div class="grid_sells sells_item" v-for="(item, index) in showingSells" :key="index">
      <p>{{item.seller}}</p>
      <p>R$ {{item.total}}</p>
      <p>{{formatDate(item.day)}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Sells',
  data () {
    return {
      type: 'all',
      seller: ''
    }
  },
  props: [
    'data'
  ],
  methods: {
    formatDate (date) {
      let data = new Date(date)
      let month = data.getMonth() + 1
      let year = data.getFullYear()
      return `${data.getDate() > 9 ? data.getDate() : '0' + data.getDate()}/${month > 9 ? month : '0' + month}/${year}`
    }
  },
  computed: {
    ...mapGetters(['getTodaySells']),
    sellerOptions () {
      if (this.data) {
        let arr = this.data.map(el => {
          return {
            id: el.id,
            name: el.seller
          }
        })
        return [...new Set(arr.map(x => x.name))]
      }
      return null
    },
    showingSells () {
      if (this.type === 'all') {
        return this.data
      }
      if (this.type === 'today') {
        return this.getTodaySells
      }
      return this.data.filter(el => el.seller === this.seller)
    }
  }
}
</script>

<style lang="scss">
.sells_body{
  min-height: 200px;
  max-height: 350px;
  overflow: auto;
}

.sells_header{
  background: #027BE3;
  p{
    border: 1px solid #1a1a1a;
    font-weight: bold;
    color: #e6e6e6;
  }
}
.grid_sells {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 6px;
  border-radius: 6px;
  margin-bottom: 6px;
  p{
    margin: 0;
    text-align: center;
  }
}

.sells_item{
  background: #26A69A;
  p{
    font-weight: 500;
    color: #fff;
  }
}

.select_holder{
  margin-bottom: 6px;
  select:first-child{
    margin-right: 8px;
  }
  select{
    padding: 4px 8px;
    outline: none;
    border: none;
    box-shadow: 0 0 3px rgba($color: #000000, $alpha: .65);
    border-radius: 6px;
  }
}
</style>