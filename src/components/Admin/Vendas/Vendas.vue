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
const listItens = [
  {
    id: 1,
    title: "Valor Total",
    content: "100.000 R$",
    icon: "school"
  },
  {
    id: 2,
    title: "Ticket médio",
    content: "50.000 R$",
    icon: "code"
  },
  {
    id: 4,
    title: "Unidades vendidas",
    path: "/admin/vendas/unidades",
    content: "Verificar unidades vendidas...",
    icon: "record_voice_over"
  },
  {
    id: 5,
    title: "Vendas por vendedor",
    path: "/admin/vendas/vendedor",
    content: "Verificar unidades vendidas...",
    icon: "record_voice_over"
  }
];
import ChartVendas from "./ChartVendas";
import VendasCard from "./VendasCard";
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
