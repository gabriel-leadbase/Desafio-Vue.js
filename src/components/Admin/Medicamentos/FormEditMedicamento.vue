<template>
  <q-card style="width: 350px">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-card-section class="bg-secondary text-white">
        <div class="text-h6">Atualizar Medicamento</div>
      </q-card-section>

      <q-card-section style="max-height: 300px" class="scroll">
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <q-input
              :rules="inputRules"
              v-model="item.name"
              label="Nome"
            ></q-input>
          </div>
          <div class="col-xs-12 col-md-6">
            <q-input
              :rules="inputRules"
              v-model="item.price"
              label="Preço"
            ></q-input>
          </div>
          <div class="col-xs-12 col-md-6">
            <q-input
              :rules="inputRules"
              v-model="item.calories"
              label="Calorias"
            ></q-input>
          </div>
          <div class="col-xs-12 col-md-6">
            <q-input
              :rules="inputRules"
              v-model="item.fat"
              label="Peso"
            ></q-input>
          </div>
          <div class="col-xs-12 col-md-6">
            <q-input
              :rules="inputRules"
              v-model="item.carbs"
              label="Carb"
            ></q-input>
          </div>
          <div class="col-xs-12 col-md-6">
            <q-input
              :rules="inputRules"
              v-model="item.protein"
              label="Proteina"
            ></q-input>
          </div>
          <div class="col-xs-12 col-md-6">
            <q-input
              :rules="inputRules"
              v-model="item.sodium"
              label="Sódio"
            ></q-input>
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat type="submit" label="Salvar" color="primary" />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      inputRules: [val => (val !== null && val !== "") || "campo obrigatório"]
    };
  },
  mounted() {
    console.log("props", this.item);
  },
  methods: {
    onSubmit() {
      this.$emit("editItem", this.item);
    }
  }
};
</script>

<style></style>
