<template>
  <div class="avatar">
    <img
      :src="src"
      alt="Avatar"
    >
  </div>
</template>

<script>

export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./styles.scss"></style>
