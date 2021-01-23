<template>
  <div class="input">
    <div class="input__content">
      <label
        class="input__label"
      >
        {{ label }}
      </label>
      <!-- if you use component[is=] breaks v-model -->
      <template v-if="currency">
        <money
          v-model="internalValue"
          class="input__text"
          :type="type"
          v-bind="$attrs"
        />
      </template>
      <template v-else>
        <input
          v-model="internalValue"
          class="input__text"
          :type="type"
          v-bind="$attrs"
        >
      </template>
      <span class="input__error">
        {{ error }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',

  props: {
    value: {
      type: [String, Number],
      required: true
    },

    label: {
      type: String,
      required: true
    },

    type: {
      type: String,
      default: 'text'
    },

    error: {
      type: String,
      default: ''
    },

    currency: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      internalValue: null
    }
  },

  watch: {
    value: {
      deep: true,
      immediate: true,
      handler (value) {
        if (this.internalValue !== value) {
          this.internalValue = value
        }
      }
    },

    internalValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
