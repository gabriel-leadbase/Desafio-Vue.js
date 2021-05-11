<template>
  <div>
    <div class="q-pa-sm login-info">
      Logar no Sistema
    </div>

    <div class="column q-pa-md q-gutter-y-md">
      <div class="col">
        <q-input
          class="col"
          padding 
          filled 
          :dense="true"  
          label="Login" 
          v-model="login"/>
      </div>

      <div class="col">
        <q-input 
          class="col"
          filled 
          :dense="true" 
          label="Senha" 
          v-model="password" 
          :type="isPwd ? 'password' : 'text'">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>
      
      <div class="col">
        <q-btn 
          class="fit"
          color="light-green-5" 
          text-color="black" 
          label="Logar" 
          :disable="checkLogin(this.login, this.password)"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      login: '',
      password: '',
      isPwd: true,
    }
  },

  methods:{
    checkLogin(login, password){
      if(login && password){
        return false
      }
      return true
    }
  }
}
</script>

<style scoped>
  .login-info{
    background: #8bc34a;
  }
</style>