<template>
  <q-card>
    <q-card-section class="bg-secondary text-white">
      <div class="text-h6">Atualizar Medicamento</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-card-section>
        <div class="row">
          <q-input v-model="item.name" label="Nome"></q-input>
          <q-input v-model="item.calories" label="Calorias"></q-input>
          <q-input v-model="item.fat" label="Peso"></q-input>
          <q-input v-model="item.carbs" label="Carb"></q-input>
          <q-input v-model="item.protein" label="Proteina"></q-input>
          <q-input v-model="item.sodium" label="Sódio"></q-input>
          <q-input v-model="item.calcium" label="Cálcio"></q-input>
          <q-input v-model="item.iron" label="Ferro"></q-input>
        </div>
      </q-card-section>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn
        @click="editItem()"
        flat
        label="Salvar"
        color="primary"
        v-close-popup
      />
    </q-card-actions>
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
    return {};
  },
  methods: {
    editItem() {
      this.$emit("editItem", this.item);
    }
  }
};
</script>

<style></style>
