<template>
  <button
    class="button"
    :class="[`button--${type}`, `button--${size}`]"
    :type="nativeType"
    :disabled="$attrs.disabled || loading"
    v-on="$listeners"
  >
    <template>
      <template v-if="loading">
        <div class="loading">
          <LoaderIcon
            size="24"
          />
        </div>
      </template>

      <div
        class="button__content"
        :class="{'button__content--hidden': loading}"
      >
        <span class="label label--before">
          <slot name="label:before" />
        </span>

        <span class="button__text">
          <slot />
        </span>

        <span class="label label--after">
          <slot name="label:after" />
        </span>
      </div>
    </template>
  </button>
</template>

<script>
import { LoaderIcon } from 'vue-feather-icons'

export default {
  name: 'Button',

  components: {
    LoaderIcon
  },

  props: {
    loading: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'primary',
      validate: (val) => ['primary', 'success', 'danger', 'text'].includes(val)
    },
    size: {
      type: String,
      default: 'regular',
      validate: (val) => ['regular', 'large', 'mini'].includes(val)
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
