<template>
  <div class="absolute" @click="$emit('close-modal')">
    <div class="absolute_content generic_body" @click.stop>
      <h5 class="q-ma-none">Adicione remédios ao estoque</h5>

      <div class="input_holder">
        <input type="text" v-model="name" placeholder="Nome">
        <input type="number" v-model="price" placeholder="Preço">
        <input type="number" v-model="quantity" placeholder="Quantidade">
      </div>

      <div class="button_holder">
        <q-btn label="Salvar" color="primary" class="q-mr-md" @click="save()"/>
        <q-btn label="Cancelar" color="warning" @click="$emit('close-modal')"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddDrug',
  data () {
    return {
      name: '',
      price: '',
      quantity: ''
    }
  },
  methods: {
    ...mapActions(['addDrug']),
    save () {
      if (this.name && this.quantity && this.price) {
        this.addDrug({ name: this.name, price: Number(this.price), quantity: Number(this.quantity) })
        this.$q.notify({
          message: 'Remédio salvo',
          type: 'positive'
        })
        this.$emit('close-modal')
      } else {
        this.$q.notify({
          message: 'Preencha os campos corretamente',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style lang="scss">
.absolute{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .55);
  display: flex;
  justify-content: center;
  align-items: center;
}

.absolute_content{
  width: 90%;
}

.input_holder {
  margin-top: 12px;
  display: grid;
  grid-template-rows: 36px 36px 36px;
  grid-gap: 12px;
  input{
    border-radius: 6px;
    padding-left: 6px;
    outline: none;
    border: none;
    box-shadow: 0 0 3px rgba(0, 0, 0, .75);
  }
}

.button_holder{
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
}
</style>