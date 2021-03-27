<template>
  <q-layout class="flex flex-center">
    <q-card>
      <q-card-section class="bg-secondary text-white">
        <div class="text-h6 ">Logar Desafio-Vue.js</div>
      </q-card-section>
      <div class="q-pa-md" style=" width: 400px">
        <q-form @submit="submitForm" @reset="onReset" class="q-gutter-md">
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
            :rules="[
              val => (val !== null && val !== '') || 'Campo obrigatório'
            ]"
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
      </div>
    </q-card>
  </q-layout>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {},

  methods: {
    ...mapActions("auth", ["auth_login_request"]),
    submitForm() {
      this.loadingFormButton = true;

      //  fake request with setTimeout
      setTimeout(() => {
        this.handleFakeSubmit();
        this.loadingFormButton = false;
      }, 1000);
    },
    handleFakeSubmit() {
      const { email, password } = this.form;
      this.auth_login_request({ email, password })
        .then(rsp => {
          if (rsp === "Administrador") {
            this.$router.push({ path: "admin/index" });
          }
          if (rsp === "Vendedor") {
            this.$router.push({ path: "vendedor/index" });
          }
        })
        .catch(rsp => {
          console.log("carch", rsp);
          this.$q.notify({
            color: "red-4",
            textColor: "white",
            icon: "cloud_done",
            message: rsp
          });
        });
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    }
  },

  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      loadingFormButton: false
    };
  }
};
</script>

<style></style>
