<template>
  <q-layout class="flex flex-center">
    <q-card style="width: 350px">
      <q-card-section class="bg-secondary text-white">
        <div class="text-h6">Logar</div>
      </q-card-section>
      <div class="q-pa-md">
        <login-form
          :loadingFormButton="loadingFormButton"
          @submitForm="submitForm"
        />
      </div>
    </q-card>
  </q-layout>
</template>

<script>
import LoginForm from "src/components/Login/LoginForm.vue";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  components: {
    LoginForm
  },
  computed: {},

  methods: {
    ...mapActions("auth", ["auth_login_request"]),

    submitForm(payload) {
      this.loadingFormButton = true;
      setTimeout(() => {
        this.handleFakeSubmit(payload);
        this.loadingFormButton = false;
      }, 1000);
    },

    handleFakeSubmit(payload) {
      const { email, password } = payload;
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
          this.loadingFormButton = false;
          this.$q.notify({
            color: "red-4",
            textColor: "white",
            icon: "cloud_done",
            message: rsp
          });
        });
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
