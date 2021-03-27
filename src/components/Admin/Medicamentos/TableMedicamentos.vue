<template>
  <div class="q-pa-sm q-gutter-sm">

    <q-table
       title="Treats"
      :data="listaMedicamentos"
      :columns="columns"
      :filter="filter"
      row-key="name"
      bordered
      binary-state-sort
    >
      <template v-slot:top>
        <q-btn
          size="md"
          color="secondary"
          label="Cadastrar"
          @click="showFormAddMedicamento = true"
          no-caps
        ></q-btn>
        <q-space />
        <q-input class="q-pr-lg" label="buscar medicamento" dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>


        <div class="q-pa-sm q-gutter-sm">
          <q-dialog v-model="showFormAddMedicamento">
            <form-add-medicamento @saveItem="saveItem" />
            </q-card-actions>
          </q-dialog>
        </div>
        <div class="q-pa-sm q-gutter-sm">
          <q-dialog v-model="showFormEditMedicamento">
            <form-edit-medicamento  @editItem="editItem" :item="editedItem"/>
            </q-card-actions>
          </q-dialog>
        </div>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name">
              <q-input
                v-model="props.row.name"
                dense
                autofocus
                counter
              ></q-input>
            </q-popup-edit>
          </q-td>
          <q-td key="price" :props="props">
            {{ props.row.price }}
            <q-popup-edit v-model="props.row.price">
              <q-input
                v-model="props.row.price"
                dense
                autofocus
                counter
              ></q-input>
            </q-popup-edit>
          </q-td>
          <q-td key="calories" :props="props">
            {{ props.row.calories }}
            <q-popup-edit
              v-model="props.row.calories"
              title="Update calories"
              buttons
            >
              <q-input
                type="number"
                v-model="props.row.calories"
                dense
                autofocus
              ></q-input>
            </q-popup-edit>
          </q-td>
          <q-td key="fat" :props="props">
            <div class="text-pre-wrap">{{ props.row.fat }}</div>
            <q-popup-edit v-model="props.row.fat">
              <q-input
                type="textarea"
                v-model="props.row.fat"
                dense
                autofocus
              ></q-input>
            </q-popup-edit>
          </q-td>
          <q-td key="carbs" :props="props">
            {{ props.row.carbs }}
            <q-popup-edit
              v-model="props.row.carbs"
              title="Update carbs"
              buttons
              persistent
            >
              <q-input
                type="number"
                v-model="props.row.carbs"
                dense
                autofocus
                hint="Use buttons to close"
              ></q-input>
            </q-popup-edit>
          </q-td>
          <q-td key="protein" :props="props">{{ props.row.protein }}</q-td>
          <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
          <q-td key="calcium" :props="props">{{ props.row.calcium }}</q-td>
          <q-td key="iron" :props="props">{{ props.row.iron }}</q-td>
          <q-td key="actions"  :props="props">
            <q-btn
              color="blue"
              label="Atualizar"
              @click="showFormEditItem(props.row)"
              size="md"
            ></q-btn>
            <q-btn
              color="red"
              label="Deletar"
              @click="deleteItem(props.row)"
              size="md"
            ></q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import FormAddMedicamento from "./FormAddMedicamento";
import FormEditMedicamento from "./FormEditMedicamento";
import listaMedicamentos from "./../../data/listaMedicamentos";
export default {
  components: {
        FormAddMedicamento,
        FormEditMedicamento
    },
  methods: {

    deleteItem(item) {
      const index = this.listaMedicamentos.indexOf(item);
      confirm("deseja realmente deletar este item?") &&
        this.listaMedicamentos.splice(index, 1) && this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Elemento deletado com sucesso"
        });
    },

    showFormEditItem(item) {
      this.editedIndex = this.listaMedicamentos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.showFormEditMedicamento = true
    },

    editItem(payload){
      Object.assign(this.listaMedicamentos[this.editedIndex], payload);

      this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Elemento editado com sucesso"
        });
        this.showFormEditMedicamento = false
    },
    saveItem(payload){
     this.listaMedicamentos.unshift(payload);
     this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Elemento cadastrado com sucesso"
        });
        this.showFormAddMedicamento = false
    },


  },
  data() {
    return {
      filter: '',
      listaMedicamentos:listaMedicamentos,
      show_dialog: false,
      showFormAddMedicamento:false,
      showFormEditMedicamento:false,
      editedIndex: -1,
      editedItem: {
        name: "",
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
        sodium: 0,
      },
      defaultItem: {
        name: "",
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
        sodium: 0,
      },
      columns: [
        {
          name: "name",
          required: true,
          label: "Medicamento (100g serving)",
          align: "center",
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
        {
          name: "fat",
          label: "Peso (g)",
          field: "fat",
          align:"center",
          sortable: true,
          style: "width: 10px"
        },
        { name: "carbs",align:"center", label: "Carbs (g)", field: "carbs" },
        { name: "protein",align:"center", label: "Protein (g)", field: "protein" },
        { name: "sodium",align:"center", label: "Sódio (mg)", field: "sodium" },
        {
          name: "actions",
          align:"center",
          label: "Ações",
          field: "actions"
        }
      ],
    };
  }
};
</script>

<style lang="sass">

</style>
