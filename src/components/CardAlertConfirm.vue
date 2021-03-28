<template>
  <q-card style="width: 300px">
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ question }}
    </q-card-section>

    <q-card-actions align="right" class="bg-white text-teal">
      <q-btn @click="confirm" flat label="OK" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    question: {
      type: String
    }
  },
  methods: {
    confirm() {
      this.$emit("confirmDeleteItem");
    },
    reject() {
      this.$emit("reject");
    }
  },
  data() {
    return {
      key: "value"
    };
  }
};
</script>

<style></style>
