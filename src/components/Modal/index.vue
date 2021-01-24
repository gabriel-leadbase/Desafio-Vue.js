<template>
  <VModal
    class="modal"
    height="auto"
    :name="name"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div class="modal__header">
      <h1 class="modal__title">
        {{ title }}
      </h1>
      <XIcon
        class="modal__close"
        size="20"
        @click="$modal.hide(name)"
      />
    </div>

    <div class="modal__body">
      <slot />
    </div>

    <div class="modal__footer">
      <slot name="footer" />
    </div>
  </VModal>
</template>

<script>
import { XIcon } from 'vue-feather-icons'

export default {
  name: 'Modal',

  components: {
    XIcon
  },

  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
