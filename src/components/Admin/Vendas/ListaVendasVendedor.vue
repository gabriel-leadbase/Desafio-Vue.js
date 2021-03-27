<template>
  <q-page class="flex-center  q-pt-lg q-pa-sm">
    <template>
      <div class="q-pa-md">
        <q-table
          title="Vendas por vendedor"
          :data="data"
          :loading="loading"
          :columns="columns"
          row-key="name"
        />
      </div>
    </template>
  </q-page>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  data() {
    return {
      loading: true,
      columns: [
        {
          name: "nome",
          required: true,
          label: "Nome do vendedor",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true,
          classes: "bg-grey-2 ellipsis",
          style: "max-width: 100px",
          headerClasses: "bg-primary text-white"
        },
        {
          name: "valor",
          align: "center",
          label: "Valor total",
          field: "calories",
          sortable: true
        },
        {
          name: "ticket",
          label: "Ticket médio",
          field: "fat",
          align: "center",
          sortable: true
        },
        {
          name: "unidades",
          label: "Unidades vendidas",
          align: "center",
          field: "carbs"
        }
      ],
      data: [
        {
          name: "Fulano de Tal",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%"
        },
        {
          name: "José de Tal",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%"
        },
        {
          name: "Beltrano Fulano",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%"
        },
        {
          name: "Maria Farmácia",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: "3%",
          iron: "8%"
        },
        {
          name: "Elvis Huges",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: "7%",
          iron: "16%"
        }
      ]
    };
  }
};
</script>

<style></style>
