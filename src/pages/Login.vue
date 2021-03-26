<template>
  <q-layout class="flex flex-center">
    <div class="q-pa-md" style=" width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="form.email"
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
          lazy-rules
          :rules="[val => (val !== null && val !== '') || 'Campo obrigatório']"
        />
        <div>
          <q-btn label="Logar" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Formulario submetido"
        });
      }
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    }
  },

  computed: {
    count: {
      get() {
        return this.$store.state.auth.count;
      },
      set() {
        this.$store.commit("auth/increment");
      }
    }
  }
};
</script>

<style></style>
