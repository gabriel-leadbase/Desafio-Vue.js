<template>
  <b-container class="p-4" fluid>
    <b-row>
      <b-col class="shadow rounded">
        <div class="d-flex justify-content-between">
          <h4 class="text-secondary color-text">Medicamentos</h4>
        </div>
        <div class="d-flex justify-content-end mb-4">
          <b-button variant="success" v-b-modal.modal-1
            >Adicionar Medicamento</b-button
          >
          <b-modal id="modal-1" title="Adicionar medicamento">
            <div>
              <b-form @submit.prevent="saveMedicine()">
                <b-form-group
                  id="input-group-1"
                  label="Medicamento:"
                  label-for="input-1"
                  description="Insira o nome do medicamento."
                >
                  <b-form-input
                    id="input-1"
                    v-model="formMedicine.name"
                    type="text"
                    placeholder="Nome"
                    required
                  >
                  </b-form-input>
                </b-form-group>
                <div class="d-flex justify-content-between">
                  <b-button variant="success" type="submit" class="mt-2"
                    >Salvar</b-button
                  >
                  <strong class="text-success mt-3" v-if="returnSuccess"
                    >Sucesso</strong
                  >
                </div>
              </b-form>
            </div>
          </b-modal>
        </div>
        <b-list-group v-for="(medicine, index) in medicines" :key="index">
          <b-list-group-item class="d-flex justify-content-between mb-1">
            <span class="color-text">{{ medicine.name }}</span>
            <span>
              <span class="mr-5 deleteUpdate" v-b-modal="`modal${index}`">
                <b-icon-pencil variant="warning"></b-icon-pencil>
              </span>
              <b-modal
                :id="`modal${index}`"
                :title="`Atualizar: ${medicine.name}`"
              >
                <div>
                  <b-form @submit.prevent="saveMedicine(index, medicine.name)">
                    <b-form-group
                      id="input-group-1"
                      label="Medicamento:"
                      label-for="input-1"
                      description="Insira o nome do medicamento."
                    >
                      <b-form-input
                        id="input-1"
                        v-model="formMedicine.name"
                        type="text"
                        :placeholder="medicine.name"
                        required
                      >
                      </b-form-input>
                    </b-form-group>
                    <div class="d-flex justify-content-between">
                      <b-button variant="success" type="submit" class="mt-2"
                        >Atualizar</b-button
                      >
                      <strong class="text-success mt-3" v-if="returnSuccess"
                        >Sucesso</strong
                      >
                    </div>
                  </b-form>
                </div>
              </b-modal>
              <span @click="deleteMedicine(index)">
                <b-icon-trash
                  class="mt-1 deleteUpdate"
                  variant="danger"
                ></b-icon-trash>
              </span>
            </span>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col class="shadow rounded">
        <div class="d-flex justify-content-between">
          <h4 class="text-secondary color-text">Vendas</h4>
        </div>
        <div class="d-flex justify-content-end mb-4">
          <b-button variant="success" v-b-modal.modalvenda
            >Adicionar Venda</b-button
          >
          <b-modal id="modalvenda" title="Adicionar Venda">
            <div>
              <b-form @submit.prevent="saveSale()">
                <b-form-group
                  id="input-group-1"
                  label="Medicamento:"
                  label-for="input-1"
                  description="Insira o nome do medicamento."
                >
                  <b-form-input
                    id="input-1"
                    v-model="formSale.nameMedicine"
                    type="text"
                    placeholder="Nome do Medicamento"
                    required
                  >
                  </b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  label="Quantidade:"
                  label-for="input-1"
                  description="Insira a quatidade de medicamentos."
                >
                  <b-form-input
                    id="input-1"
                    v-model="formSale.amount"
                    type="number"
                    min="1"
                    placeholder="1"
                  >
                  </b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  label="Valor Unidade:"
                  label-for="input-1"
                  description="Insira o preço da unidade."
                >
                  <b-form-input
                    id="input-1"
                    v-model="formSale.value"
                    type="text"
                    placeholder="0.00"
                    required
                  >
                  </b-form-input>
                </b-form-group>
                <div class="d-flex justify-content-between">
                  <b-button variant="success" type="submit" class="mt-2"
                    >Salvar</b-button
                  >
                  <strong class="text-success mt-3" v-if="returnSuccess"
                    >Sucesso</strong
                  >
                </div>
              </b-form>
            </div>
          </b-modal>
        </div>
        <b-list-group v-for="(sale, index) in sales" :key="index">
          <b-list-group-item class="d-flex justify-content-between mb-1"
            ><span>{{ sale.nameMedicine }}</span>
            <div>
              <span class="mr-4">Unidades: {{ sale.amount }}</span
              ><span>Valor: {{ (sale.value * sale.amount).toFixed(2) }}</span>
              <span @click="deleteSale(index)">
                <b-icon-trash class="ml-4 deleteUpdate" variant="danger"></b-icon-trash>
              </span>
            </div>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import firebase from "firebase/app";
export default {
  data() {
    return {
      showButton: true,
      medicines: [],
      sales: [],
      returnSuccess: false,
      formMedicine: {
        name: "",
      },
      formSale: {
        nameMedicine: "",
        amount: 1,
        salesman: "",
        value: "",
      },
    };
  },

  mounted: function () {
    this.getMedicines();
    this.getSales();
  },

  methods: {
    changeShowButton() {
      this.showButton = !this.showButton;
    },

    getMedicines() {
      const database = this.$firebase
        .firestore()
        .collection("pharmacy")
        .doc("medicines");
      database.onSnapshot((doc) => {
        if (doc.exists) {
          this.medicines = doc.data().medicines;
        }
      });
    },

    getSales() {
      const database = this.$firebase
        .firestore()
        .collection("pharmacy")
        .doc("sales");
      database.onSnapshot((doc) => {
        if (doc.exists) {
          this.sales = doc.data().sales;
        }
      });
    },

    saveSale() {
      const database = this.$firebase
        .firestore()
        .collection("pharmacy")
        .doc("sales");
      database
        .set(
          { sales: firebase.firestore.FieldValue.arrayUnion(this.formSale) },
          { merge: true }
        )
        .then(() => {
          this.success();
          this.formSale = {
            nameMedicine: "",
            amount: 1,
            salesman: "",
            value: "",
          };
        });
    },

    success() {
      this.returnSuccess = true;
      setTimeout(() => {
        this.returnSuccess = false;
      }, 3000);
    },

    saveMedicine(index, name) {
      const database = this.$firebase
        .firestore()
        .collection("pharmacy")
        .doc("medicines");
      if (index || name) {
        this.medicines[index] = this.formMedicine;
        database.update({ medicines: this.medicines }).then(() => {
          this.success();
        });
      } else {
        database
          .set(
            {
              medicines: firebase.firestore.FieldValue.arrayUnion(
                this.formMedicine
              ),
            },
            { merge: true }
          )
          .then(() => {
            this.formMedicine.name = "";
            this.success();
          });
      }
    },

    deleteMedicine(indexParam) {
      let updatedMedicines = this.medicines.filter(
        (medicine, index) => index !== indexParam
      );
      const database = this.$firebase
        .firestore()
        .collection("pharmacy")
        .doc("medicines");
      database.update({
        medicines: updatedMedicines,
      });
    },

    deleteSale(indexParam) {
      let updatedSales = this.sales.filter(
        (sale, index) => index !== indexParam
      );
      const database = this.$firebase
        .firestore()
        .collection("pharmacy")
        .doc("sales");
      database.update({
        sales: updatedSales,
      });
    }
  },
};
</script>

<style>
.color-text {
  color: #5a5c69 !important;
}

.btn-secondary-personal {
  color: #fff;
  background-color: #fff;
  border: none;
}

.btn-secondary-personal:hover,
.btn-secondary-personal:focus {
  background: #fff;
  border: none;
  box-shadow: none;
}

.deleteUpdate:hover {
  cursor: pointer;
}
</style>