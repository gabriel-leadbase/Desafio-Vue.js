<template>
  <q-card>
    <q-card-section class="bg-secondary text-white">
      <div class="text-h6 ">Incluir venda</div>
    </q-card-section>

    <q-separator />

    <q-card-section style="min-width: 400px; max-height: 50vh" class="scroll">
      <q-list separator>
        <q-item v-for="item in itens" :key="item.name" clickable v-ripple>
          <q-item-section>
            <q-item-label>{{ item.name }}</q-item-label>
            <q-item-label caption>R$: {{ item.calories }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-btn flat label="Cancelar" color="primary" v-close-popup />
      <q-btn flat label="Confirmar" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    itens: {
      type: Array
    }
  }
};
</script>

<style></style>
