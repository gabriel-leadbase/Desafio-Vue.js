<template>
  <q-card style="width: 400px">
    <q-card-section class="bg-secondary text-white">
      <div class="text-h6 ">Incluir Venda</div>
    </q-card-section>

    <q-separator />
    <q-card-section>
      <div class="text-subtitle2">Quntidade escolhida: {{ itens.length }}</div>
      <div class="text-subtitle2">Valor: {{ totalValuePrices }} R$</div>
    </q-card-section>

    <q-card-section style="max-height: 200px" class="scroll">
      <q-list separator>
        <q-item v-for="item in copyItens" :key="item.name">
          <q-item-section>
            <q-item-label>{{ item.name }}</q-item-label>
            <q-item-label caption
              >R$: {{ item.price }} Qtd: {{ item.quant }}</q-item-label
            >
          </q-item-section>
          <q-item-section class="row" side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn @click="item.quant++" round dense flat icon="add">
                <q-tooltip>
                  Incrementar quantidade
                </q-tooltip>
              </q-btn>
              <q-btn
                :disabled="item.quant === 0"
                @click="item.quant--"
                round
                dense
                flat
                icon="remove"
              >
                <q-tooltip>
                  Decrementar quatidade
                </q-tooltip>
              </q-btn>
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-btn
        flat
        @click="cancelSell"
        label="Cancelar"
        color="primary"
        v-close-popup
      />
      <q-btn
        flat
        label="Confirmar"
        @click="finishSell"
        color="primary"
        v-close-popup
      />
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
      return this.copyItens.reduce(function(total, item) {
        return total + item.price * item.quant;
      }, 0);
    }
  },
  mounted() {
    this.copyItens = this.itens.map(item => {
      let newItem = Object.assign({}, item, {
        quant: 1
      });
      return newItem;
    });
  },
  methods: {
    plusItem(item) {
      item.quant = item.quant + 1;
    },
    finishSell() {
      this.$emit("finishSell", this.copyItens);
    },
    cancelSell() {
      this.$emit("cancelSell");
    }
  },
  data() {
    return {
      copyItens: []
    };
  }
};
</script>

<style></style>
