<template>
  <main id="main">
    <Navbar :items="menu" />

    <Header>
      <template #action>
        <slot name="header:action" />
      </template>
    </Header>

    <div class="content">
      <slot />
    </div>
  </main>
</template>

<script>
import Navbar from './Navbar'
import Header from './Header'

export default {
  name: 'AdminLayout',

  components: {
    Navbar,
    Header
  },

  data () {
    return {
      menu: [
        {
          label: 'Dashboard',
          icon: require('@/assets/images/icons/grid.svg'),
          url: '/home'
        },
        {
          label: 'Medicamentos',
          icon: require('@/assets/images/icons/layers.svg'),
          url: '/products'
        }
      ]
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
