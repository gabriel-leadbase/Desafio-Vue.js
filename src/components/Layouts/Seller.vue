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
          label: 'Vendas',
          icon: require('@/assets/images/icons/trending-up.svg'),
          url: '/sales'
        },
        {
          label: 'Medicamentos',
          icon: require('@/assets/images/icons/grid.svg'),
          url: '/products'
        }
      ]
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
