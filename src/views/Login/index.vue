<template>
  <main class="login">
    <div class="login__content">
      <div class="login__logo">
        <img
          src="@/assets/images/logo.svg"
          alt="Logo"
        >
      </div>

      <h1 class="login__title">
        Faça seu Login
      </h1>

      <form class="login__form">
        <Input
          v-model="formData.email"
          required
          label="E-mail"
          name="email"
          type="email"
          placeholder="exemplo@seuemail.com"
        />
        <Input
          v-model="formData.password"
          required
          label="Senha"
          name="password"
          type="password"
        />
        <Button
          class="login__submit"
          :loading="isLoading"
          @click="handleLogin(formData)"
        >
          Entrar
        </Button>
      </form>
    </div>
  </main>
</template>

<script>
import Input from '@/components/Input'
import Button from '@/components/Button'
import { mapGetters } from 'vuex'

export default {
  name: 'Login',

  components: {
    Input,
    Button
  },

  data () {
    return {
      isLoading: false,
      formData: {
        email: '',
        password: ''
      }
    }
  },

  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },

  watch: {
    user: {
      deep: true,
      immediate: true,
      handler: 'redirectToDashboard'
    }
  },

  methods: {
    redirectToDashboard (user) {
      const groupRoutes = {
        admin: '/home',
        sales: '/sales'
      }

      if (user) {
        this.$router.push(
          groupRoutes[user.permissions.group]
        )
      }
    },

    async handleLogin (formData) {
      try {
        this.isLoading = true
        await this.$store.dispatch('auth/login', formData)
      } catch (error) {
        console.error(error)
        this.$notify({
          type: 'error',
          title: 'Não foi possivel fazer login',
          text: 'Verifique seu email e senha e tente novamente'
        })
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./styles.scss"></style>
