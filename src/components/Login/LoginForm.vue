<template>
  <q-form @submit="submit" class="q-gutter-md">
    <q-input
      filled
      v-model="form.email"
      type="email"
      label="email"
      hint="Email"
      lazy-rules
      :rules="[val => (val && val.length > 0) || 'Campo obrigatório']"
    />

    <q-input
      filled
      type="password"
      v-model="form.password"
      label="senha"
      hint="Senha"
      lazy-rules
      :rules="[val => (val !== null && val !== '') || 'Campo obrigatório']"
    />
    <div align="right">
      <q-btn
        :loading="loadingFormButton"
        label="Logar"
        type="submit"
        color="primary"
      />
    </div>
  </q-form>
</template>

<script>
export default {
  props: {
    loadingFormButton: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    submit: function() {
      this.$emit("submitForm", this.form);
    }
  },
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  }
};
</script>

<style></style>
