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
        {{ numberToBRL(price) }}
      </span>
    </div>

    <div
      v-if="$can('products:create')"
      class="product-card__footer-container"
    >
      <div
        class="product-card__footer"
      >
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
          <Toggle
            :value="is_active"
            @input="(is_active) => handleFormSubmit({ id, is_active })"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/services/api'

import Toggle from '@/components/Toggle'
import numberToBRL from '@/utils/numberToBRL'

import { Edit3Icon, Trash2Icon } from 'vue-feather-icons'

export default {
  name: 'ProductCard',

  components: {
    Edit3Icon,
    Trash2Icon,
    Toggle
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
      type: Number,
      required: true
    },
    is_active: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    numberToBRL,

    async handleFormSubmit ({ id, is_active }) {
      try {
        const { data: product } = api.patch(`/products/${id}`, { is_active })

        this.$notify({ title: `Medicamento ${is_active ? 'Ativado' : 'Desativado'} com sucesso` })

        this.$emit('save', product)
      } catch (error) {
        console.error(error)
      }
    }

  }
}
</script>

<style lang="scss" scoped src="./styles.scss"></style>
