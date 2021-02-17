<template>
  <div class="generic_body stock" v-if="data">
    <div class="flex_header" style="align-items: baseline">
      <h5 class="q-mt-none q-mb-md">Seu estoque</h5>
      <h5 v-if="isAdmin" class="q-ma-none q-mb-md" style="font-weight: 600; font-size: 1.4em; cursor: pointer" @click="show_add = true">Adicionar +</h5>
    </div>
    <div class="item">
      <table>
        <tr class="head">
          <td>Remédio</td>
          <td>Quantidade</td>
          <td>Preço</td>
        </tr>
        <tr v-for="item in Object.keys(data)" :key="item" class="itens" @click="isAdmin ? open_edit(item) : ''">
          <td>{{item}}</td>
          <td>{{data[item].quantity}}</td>
          <td>R$ {{data[item].price}}</td>
        </tr>
      </table>
    </div>

    <transition name="slide" mode="out-in">
      <AddDrug
        v-show="show_add"
        @close-modal="show_add = false"
      />
    </transition>

    <transition name="slide" mode="out-in">
      <StockEdit
        v-show="show_edit"
        :selected="edit_selected"
        @close-modal="show_edit = false"
      />
    </transition>

  </div>
</template>

<script>
import AddDrug from '../Adm/AddDrug'
import StockEdit from '../Adm/StockEdit'

export default {
  name: 'Stock',
  data () {
    return {
      show_add: false,
      show_edit: false,
      edit_selected: null
    }
  },
  methods: {
    open_edit (name) {
      this.edit_selected = {data: this.data[name], name: name}
      this.show_edit = true
    }
  },
  computed: {
    isAdmin () {
      return document.location.pathname === '/adm'
    }
  },
  props: [
    'data'
  ],
  components: {
    AddDrug,
    StockEdit
  }
}
</script>

<style lang="scss">
table{
  width: 100%;
  border-collapse: collapse;

}
table, th, td {
  border: 1px solid black;
  padding: 4px;
}

.stock{
  max-height: 350px;
  overflow: auto;
}

.head{
  font-weight: 700;
  font-size: 1.3em;
  background: #6CE6D8;
  color: #1a1a1a;
}

.itens{
  font-size: 1.1em;
  font-weight: 500;
}


.slide-leave-active,
.slide-enter-active {
  transition: .5s;
}
.slide-enter {
  transform: translate(0, 100%);
}
.slide-leave-to {
  transform: translate(0 ,-100%);
}
</style>