<template>
  <div class="navbar">
    <div class="navbar__logo">
      <img
        src="@/assets/images/logo.svg"
        alt="Logo"
      >
    </div>

    <ul class="menu">
      <li class="menu__title">
        <p>Menu</p>
      </li>
      <li
        v-for="{ label, icon, url } of items"
        :key="label"
        :class="{'menu__item--active': $route.path === url}"
        class="menu__item"
      >
        <RouterLink :to="url">
          <img
            class="menu__icon"
            :src="icon"
          >
          {{ label }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Navbar',

  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
