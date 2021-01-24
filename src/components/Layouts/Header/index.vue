<template>
  <div class="header">
    <div class="profile">
      <Avatar
        class="profile__avatar"
        :src="user.avatar_url"
      />
      <p class="profile__info">
        Bem vindo(a),
        <br>
        <span class="profile__user"> {{ userFirstName }} </span>
      </p>
    </div>
    <div class="">
      <slot name="action">
        <PowerIcon
          class="header__logout"
          size="20"
          @click="handleLogout"
        />
      </slot>
    </div>
  </div>
</template>

<script>

import { PowerIcon } from 'vue-feather-icons'

import Avatar from '@/components/Avatar'
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',

  components: {
    PowerIcon,
    Avatar
  },

  computed: {
    ...mapGetters({
      user: 'auth/user'
    }),

    userFirstName () {
      return this.user.name.split(' ').find(Boolean)
    }
  },

  methods: {
    handleLogout () {
      this.$store.dispatch('auth/logout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
