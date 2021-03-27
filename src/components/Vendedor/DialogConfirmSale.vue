<template>
  <q-card style="width: 400px">
    <q-card-section class="bg-secondary text-white">
      <div class="text-h6 ">Incluir Venda</div>
    </q-card-section>

    <q-separator />
    <q-card-section>
      <div class="text-subtitle2">Quntidade escolhida:{{ itens.length }}</div>
      <div class="text-subtitle2">Valor: {{ totalValuePrices }}</div>
    </q-card-section>

    <q-card-section style="max-height: 200px" class="scroll">
      <q-list separator>
        <q-item v-for="item in itens" :key="item.name">
          <q-item-section>
            <q-item-label>{{ item.name }}</q-item-label>
            <q-item-label caption
              >R$: {{ item.price }} Qtd: {{ item.calories }}</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-btn @click="plusItem(item)" round dense flat icon="add" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-btn flat label="Cancelar" color="primary" v-close-popup />
      <q-btn flat label="Confirmar" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    itens: {
      type: Array
    }
  },
  computed: {
    totalValuePrices() {
      return this.itens.reduce(function(total, item) {
        return total + item.calories;
      }, 0);
    }
  },
  methods: {
    plusItem(item) {
      console.log("plusItem", item);
    }
  },
  data() {
    return {};
  }
};
</script>

<style></style>
