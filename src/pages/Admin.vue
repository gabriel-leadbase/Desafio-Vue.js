<template>
  <q-page class="flex-center">
    <div class="q-pa-md row">
      <div
        v-for="item in listItens"
        class="q-pa-md col-xs-12 col-sm-4 col-md-3 col-lg-3"
        :key="item.title"
      >
        <AdminCards :item="item" :key="item.id" />
      </div>
    </div>
  </q-page>
</template>

<script>
import AdminCards from "./../components/Admin/AdminCards";
const listItens = [
  {
    id: 1,
    title: "Medicamentos",
    path: "/admin/medicamentos",
    content: "Incluir, excluir, atualizar e visualizar medicamentos.",
    icon: "school"
  },
  {
    id: 2,
    title: "Vendas",
    path: "/admin/vendas",
    content: "Vendas Totais (Valor total, Ticket médio e unidades...",
    icon: "code"
  },
  {
    id: 4,
    title: "Vendedores",
    path: "/admin/vendedores",
    content: "Vendas por vendedor (Valor total, ...",
    icon: "record_voice_over"
  }
];
export default {
  components: {
    AdminCards
  },
  name: "PageIndex",
  data() {
    return {
      listItens: listItens,
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
};
</script>

<style lang="stylus">
.my-card
  width: 100%
  max-width: 350px
</style>
