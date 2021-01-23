<template>
  <div class="header">
    <div class="profile">
      <Avatar
        class="profile__avatar"
        src="https://avatars.githubusercontent.com/u/17859531?s=460&u=bb0947e677d6b8810906ab7c7b95ee5c372de31e&v=4"
      />
      <p class="profile__info">
        Bem vindo,
        <br>
        <span class="profile__user"> Jimmy Bastos </span>
      </p>
    </div>
    <div class="">
      <slot name="action">
        <PowerIcon
          class="header__logout"
          size="20"
        />
      </slot>
    </div>
  </div>
</template>

<script>

import { PowerIcon } from 'vue-feather-icons'

import Avatar from '@/components/Avatar'

export default {
  name: 'Navbar',

  components: {
    PowerIcon,
    Avatar
  },

  methods: {
    logout () {

    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
