<template>
  <main class="login">
    <div class="login__content">
      <div class="login__logo">
        <img src="@/assets/images/logo.svg" alt="Logo">
      </div>

      <h1 class="login__title">
        Faça seu Login
      </h1>

      <form class="login__form">
        <Input
          required
          label="E-mail"
          name="email"
          type="email"
          placeholder="exemplo@seuemail.com"
          v-model="formData.email"
        />
        <Input
          required
          label="Senha"
          name="password"
          type="password"
          v-model="formData.password"
        />
        <RouterLink
          to="/home"
          class="login__submit"
        >
          <Button>
            Entrar
          </Button>
        </RouterLink>
      </form>
    </div>
  </main>
</template>

<script>
import Input from '@/components/Input'
import Button from '@/components/Button'

export default {
  name: 'Login',

  components: {
    Input,
    Button
  },

  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  submit () {

  }
}
</script>

<style lang="scss" scoped src="./styles.scss"></style>
