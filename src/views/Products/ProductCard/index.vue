<template>
  <div class="product-card">
    <div
      v-if="image_url"
      class="product-card__image"
    >
      <img
        :src="image_url"
        :alt="name"
      >
    </div>

    <div class="product-card__body">
      <h2 class="product-card__title">
        {{ name }}
      </h2>
      <p class="product-card__description">
        {{ description }}
      </p>
      <span class="product-card__price">
        {{ price }}
      </span>
    </div>

    <div class="product-card__footer">
      <div>
        <button
          class="product-card__action"
          @click="$emit('edit', {...$props, ...$attrs})"
        >
          <Edit3Icon
            size="20"
          />
        </button>
        <button
          class="product-card__action"
          @click="$emit('delete', {...$props, ...$attrs})"
        >
          <Trash2Icon
            size="20"
          />
        </button>
      </div>
      <div>
        {{ is_active ? 'Ativo' : 'Inativo' }}
      </div>
    </div>
  </div>
</template>

<script>
import { Edit3Icon, Trash2Icon } from 'vue-feather-icons'

export default {
  name: 'ProductCard',

  components: {
    Edit3Icon,
    Trash2Icon
  },

  props: {
    id: {
      type: Number,
      required: true
    },
    image_url: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    is_active: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./styles.scss"></style>
