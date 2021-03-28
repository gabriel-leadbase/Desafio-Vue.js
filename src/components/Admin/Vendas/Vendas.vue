<template>
  <q-page class="flex-center q-pa-sm">
    <div class="q-pa-md row">
      <div
        v-for="item in itensCards"
        class="q-pa-md col-xs-12 col-sm-6 col-md-3 col-lg-3"
        :key="item.id"
      >
        <vendas-card
          :item="item"
          class="q-pa-md col-xs-12 col-sm- col-md-4 col-lg-3"
        />
      </div>
      <div class="col-xs-12">
        <chart-vendas />
      </div>
    </div>
  </q-page>
</template>

<script>
import ChartVendas from "./ChartVendas";
import VendasCard from "./VendasCard";
import listItens from "../../data/listItensCard";
export default {
  components: {
    ChartVendas,
    VendasCard
  },
  data() {
    return {
      itensCards: listItens
    };
  }
};
</script>

<style></style>
