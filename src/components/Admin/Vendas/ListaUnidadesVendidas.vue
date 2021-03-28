<template>
  <q-page class="flex-center  q-pt-lg q-pa-sm">
    <template>
      <div class="q-pa-md">
        <q-table
          title="Unidades vendidas"
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
          name: "name",
          required: true,
          label: "Nome do medicamento",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true,
          classes: "bg-grey-2 ellipsis",
          style: "max-width: 100px",
          headerClasses: "bg-primary text-white"
        },
        {
          name: "quantidade",
          align: "center",
          label: "Quantidade vendida",
          field: "calories",
          sortable: true
        },
        {
          name: "valor",
          label: "Valor/Unidade (R$)",
          field: "fat",
          align: "center",
          sortable: true
        },
        {
          name: "quantidadeEstoqeu",
          label: "Quantidade em estoque",
          align: "center",
          field: "carbs"
        },
        {
          name: "total",
          label: "Total Vendido (R$)",
          field: row => row.calories * row.fat,
          align: "center"
        }
      ],
      data: [
        {
          name: "Aspirina",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%"
        },
        {
          name: "Anador",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%"
        },
        {
          name: "Dipirona",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%"
        },
        {
          name: "Mertiolate",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: "3%",
          iron: "8%"
        },
        {
          name: "Acetaminofeno",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: "7%",
          iron: "16%"
        },
        {
          name: "Diclofenaco",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: "0%",
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: "0%",
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: "0%",
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: "2%",
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: "12%",
          iron: "6%"
        }
      ]
    };
  }
};
</script>

<style></style>
