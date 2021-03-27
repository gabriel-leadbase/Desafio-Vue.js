<template>
  <div>
    <q-table
      :selected-rows-label="getSelectedString"
      selection="multiple"
      :selected.sync="selected"
      :filter="filter"
      :data="listaMedicamentos"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:top>
        <div class="text-h6">Medicamentos</div>

        <q-space />
        <q-btn
          size="md"
          v-show="activeSaleButton"
          color="primary"
          label="Relizar venda"
          @click="handleSaleButtonClick"
          no-caps
        ></q-btn>
        <q-input
          class="q-pl-lg"
          label="buscar medicamento"
          dense
          debounce="300"
          color="primary"
          v-model="filter"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-dialog v-model="dialogSale">
          <dialog-confirm-sale :itens="selected" />
        </q-dialog>
      </template>
    </q-table>
  </div>
</template>

<script>
import DialogConfirmSale from "./DialogConfirmSale";
import listaMedicamentos from "./../data/listaMedicamentos";

export default {
  components: { DialogConfirmSale },
  methods: {
    getSelectedString() {
      return this.selected.length === 0
        ? ""
        : `${this.selected.length} itens ${
            this.selected.length > 1 ? "s" : ""
          } Selecionados of ${this.listaMedicamentos.length}`;
    },
    handleSaleButtonClick() {
      this.dialogSale = true;
    }
  },
  computed: {
    activeSaleButton() {
      return this.selected.length;
    }
  },
  data() {
    return {
      selected: [],
      listaMedicamentos: listaMedicamentos,
      dialogSale: false,
      filter: "",
      columns: [
        {
          name: "name",
          required: true,
          label: "Nome (100g serving)",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "price",
          required: true,
          label: "Preço (R$)",
          align: "center",
          field: row => row.price,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "calories",
          align: "center",
          label: "Calories",
          field: "calories",
          sortable: true
        },
        { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
        { name: "carbs", label: "Carbs (g)", field: "carbs" },
        { name: "protein", label: "Protein (g)", field: "protein" },
        { name: "sodium", label: "Sodium (mg)", field: "sodium" }
      ]
    };
  }
};
</script>

<style></style>
