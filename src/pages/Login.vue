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
          @click="verifyLogin()"
          :disable="checkLogin(this.login, this.password)"/>
      </div>
    </div>
  </div>
</template>

<script>
import $store from 'src/store/user.js'

export default {
  name: 'PageIndex',
  data() {
    return {
      login: '',
      password: '',
      isPwd: true,
      users:[
        {
          user: 'admin',
          password: 'admin',
          name: 'Juan Matheus',
          permission: true,
        },
        {
          user: 'joao01',
          password: 'joao01',
          name: 'João Carlos',
          permission: false,
        },
        {
          user: 'alisson01',
          password: 'alisson01',
          name: 'Alisson Almagro',
          permission: false,
        }
      ]
    }
  },

  methods:{
    // Verify if user exist, save user on store and redirect to next page
    verifyLogin(){
      for(var x = 0; x < this.users.length; x++){
        if(this.users[x].user == this.login && this.users[x].password == this.password){
          if(this.users[x].permission){
            $store.commit('setUser', this.users[x])
            this.$router.push({path: '/logged/admin'})
          }else{
            $store.commit('setUser', this.users[x])
            this.$router.push({path: '/logged/seller'})
          }
          return null
        }
      }
      this.$q.notify({
        message: 'Login/Senha incorreto!',
        type: 'negative'
      })
    },

    // Disable or enable login button
    checkLogin(login, password){
      console.log(login, password)
      if(login.length > 4 && password.length > 4){
        return false
      }
      return true
    }
  }
}
</script>

<style scoped>
  .login-error{
    color: rgb(226, 11, 11);
    margin: 0;
  }

  .login-info{
    background: #8bc34a;
  }
</style>