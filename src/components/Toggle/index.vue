<template>
  <div
    class="toggle"
  >
    <slot name="label:before" />

    <label
      :class="['toggle__radio', {'toggle__radio--active': status === true}]"
    >
      <input
        v-model="status"
        type="checkbox"
        class="toggle__input"
        @change="$emit('input', status)"
      >
    </label>

    <slot name="label:after" />
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      status: this.value
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
