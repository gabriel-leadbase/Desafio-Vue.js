<template>
  <div class="absolute" @click="$emit('close-modal')" v-if="selected">
    <div class="absolute_content generic_body" @click.stop>
      <h5 class="q-ma-none">Edite seu estoque</h5>

      <div class="input_holder">
        <input type="text" v-model="name" :placeholder="selected.name">
        <input type="number" v-model="price" :placeholder="selected.data.price">
        <input type="number" v-model="quantity" :placeholder="selected.data.quantity">
      </div>

      <div class="button_holder">
        <q-btn label="Salvar" color="primary" class="q-mr-md" @click="edit_drug()"/>
        <q-btn label="Cancelar" color="warning" @click="$emit('close-modal')"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'StockEdit',
  props: [
    'selected'
  ],
  data () {
    return {
      name: '',
      price: '',
      quantity: ''
    }
  },
  methods: {
    ...mapActions(['editDrug']),
    reset () {
      this.name = ''
      this.price = ''
      this.quantity = ''
    },
    edit_drug () {
      if (this.selected.name !== this.name && this.selected.data.quantity !== this.quantity && this.selected.data.price !== this.price) {
        if (this.name || this.price || this.quantity) {
          this.editDrug({
            oldName: this.selected.name,
            name: this.name ? this.name : this.selected.name,
            price: this.price ? this.price : this.selected.data.price,
            quantity: this.quantity ? this.quantity : this.selected.data.quantity
          })
          this.$q.notify({
            message: 'Estoque alterado',
            type: 'positive'
          })
          this.$emit('close-modal')
          this.reset()
        } else {
          this.$q.notify({
            message: 'Há campos vazios'
          })
        }
      } else {
        this.$q.notify({
          message: 'Edite algum campo'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
input::placeholder{
  color: #1a1a1a !important;
  font-weight: 500;
}
</style>