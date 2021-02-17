<template>
  <div class="generic_body">
    <h5 class="q-ma-none bd-bt">Registre uma venda</h5>
    <div class="items_holder q-mt-md">

      <div class="flex_header">
        <p style="font-size: 1.2em">Items</p>
        <p @click="addItem()" class="add">Adicionar item +</p>
      </div>

      <div v-for="(item, index) in items" :key="index" class="item_sell">

        <div class="flex_header">
          <select v-model="items[index].name" class="f-1">
            <option placeholder="Remédio" :value="elem" v-for="(elem, idx) in Object.keys(getStock)" :key="idx">{{elem}}</option>
          </select>
          <p v-if="index > 0" class="q-ma-none remove" @click="removeItem(index)">Remover Item</p>
        </div>

        <input type="number" placeholder="Quantidade" v-model="items[index].quantity" min="0" :max="getMax(items[index].name)">
      </div>

      <div class="flex_header">
        <q-btn label="Salvar" color="primary" @click="registerSale()"/>
        <div class="total">
          <p>Total</p>
          <span>{{total}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'RegisterSale',
  props: [
    'responsible'
  ],
  data () {
    return {
      crew:{
        'João da Silva': 1,
        'Pedro da Silva': 2
      },
      items: [
        {
          name: 'Benegripe',
          quantity: 0
        }
      ]
    }
  },
  methods: {
    ...mapActions(['pushSale']),
    notify (message, type) {
      this.$q.notify({
        message,
        type
      })
    },
    registerSale () {
      if (this.responsible) {
        const sell = {}
        const today = new Date()
        this.items.forEach(el => {
          if (!el.name || !el.quantity) {
            this.notify('Preencha todos os campos', 'warning')
            throw Error('Fill all the fields')
          }
          if (this.getStock[el.name].quantity < el.quantity) {
            this.notify('Sem estoque suficiente', 'warning')
            throw Error('No stock enough')
          }
        })
        sell.items = this.items
        sell.day = today
        sell.seller = this.responsible
        sell.id = this.crew[this.responsible]
        sell.total = this.total
        this.pushSale(sell)
        this.notify('Compra realizada com sucesso', 'positive')
        this.items = [{
          name: 'Benegripe',
          quantity: 0
        }]
      } else {
        this.notify('Quem está vendendo?', 'info')
      }
    },
    getMax (elem) {
      if (elem) {
        return this.getStock[elem].quantity
      }
      return 10
    },
    addItem () {
      this.items.push({
        name: '',
        quantity: 0
      })
    },
    removeItem (index) {
      this.items.splice(index, 1)
    }
  },
  computed: {
    ...mapGetters(['getStock']),
    total () {
      let total = 0
      this.items.forEach(el => {
        const qt = Number(el.quantity)
        if (this.getStock[el.name]) {
          if (qt != 0 && qt !== '') {
            total = (total + this.getStock[el.name].price) * qt
          } 
        }
      })
      return total
    }
  }
}
</script>

<style lang="scss">
.bd-bt{
  border-bottom: 2px solid #818181;
  padding-bottom: 4px;
}

.f-1{
  width: 50%;
}

.remove, .add{
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;
}

.remove{
  color: #da5858
}

.remove:hover, .add:hover{
  text-decoration: none;
}

.add{
  color: #5d7ada;
}

.item_sell{
  margin-bottom: 12px;
  border-bottom: 2px solid #818181;
  padding-bottom: 12px;
  select, input{
    padding: 2px 6px;
    border-radius: 6px;
    border: none;
    outline: none;
    box-shadow: 0 0 3px rgba(0, 0, 0, .65);
    font-weight: 500;
    font-size: 1.1em;
  }
  input{
    width: 50%;
    margin-top: 6px;
  }
}

.total{
  display: flex;
  align-items: flex-end;
  p{
    margin: 0;
    font-weight: 600;
  }
  span{
    margin-left: 8px;
    font-size: 2em;
    font-weight: 800;
    color: #333333;
  }
}
</style>