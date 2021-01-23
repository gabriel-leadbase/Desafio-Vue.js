<template>
  <div class="input">
    <div class="input__content">
      <label
        class="input__label"
      >
        {{label}}
      </label>
      <component
        class="input__text"
        :is="currency ? 'money' : 'input'"
        :type="type"
        :value="value"
        v-bind="$attrs"
        @input="$emit('input', $event.target.value)"
      />
      <span class="input__error">
        {{error}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    currency: {
      type: Boolean,
      default: false
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
    value: {
      default: ''
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
