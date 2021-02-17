<template>
  <router-view/>
</template>

<script>

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1, h2, h3, h4, h5, h6, p{
  color: #1a1a1a
}

.generic_body {
  border-radius: 6px;
  box-shadow: 0 2px 12px rgba($color: #000000, $alpha: .25);
  background: #e6e6e6;
  padding: 8px;
}

.flex_header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.holder{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #79a9fa;
}
</style>
