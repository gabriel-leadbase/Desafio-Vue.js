<template>
  <div
    class="toggle"
  >
      <slot name="label:before"></slot>

      <label
        :class="['toggle__radio', {'toggle__radio--active': status === true}]"
      >
        <input
          type="checkbox"
          class="toggle__input"
          v-model="status"
          @change="$emit('input', status)"
        >
      </label>

      <slot name="label:after"></slot>
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
