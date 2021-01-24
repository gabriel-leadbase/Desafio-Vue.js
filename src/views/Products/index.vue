<template>
  <AdminLayout class="products">
    <template #header:action>
      <Button
        type="success"
        @click="handleProductCreate"
      >
        Novo Produto

        <template #label:after>
          <PlusSquareIcon
            size="24"
          />
        </template>
      </Button>
    </template>

    <h1 class="title">
      Produtos
    </h1>

    <div class="products__card-list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        class="products__card"
        v-bind="product"
        @edit="handleProductEdit"
        @delete="handleProductDelete"
      />
    </div>

    <ProductModalForm
      ref="ProductModalForm"
      :initial-data="selectedProduct"
      @save="handleProductSave"
      @close="onProductModalFormClose"
    />
  </AdminLayout>
</template>

<script>
import api from '@/services/api'

import { PlusSquareIcon } from 'vue-feather-icons'

import AdminLayout from '@/components/Layouts/Admin'
import Button from '@/components/Button'
import ProductCard from './ProductCard'
import ProductModalForm from './ProductModalForm'

export default {
  name: 'Products',

  components: {
    Button,
    PlusSquareIcon,
    AdminLayout,
    ProductCard,
    ProductModalForm
  },

  data () {
    return {
      selectedProduct: {},
      products: []
    }
  },

  mounted () {
    this.loadProducts()
  },

  methods: {
    async loadProducts () {
      try {
        this.isLoading = false

        const { data: products } = await api.get('products')

        this.products = products
      } catch (error) {
        console.error(error)
        this.$notify({
          type: 'error',
          title: 'Erro ao listar produtos',
          text: 'Atualize a página e tente novamente.'
        })
      } finally {
        this.isLoading = false
      }
    },

    handleProductCreate () {
      this.$modal.show('ProductModalForm')
    },

    handleProductEdit (product) {
      this.selectedProduct = product
      this.$modal.show('ProductModalForm')
    },

    async handleProductSave (savedProduct) {
      const wasSavedBefore = this.products.find(product => product.id === savedProduct.id)

      if (wasSavedBefore) {
        this.products = this.products.map(
          product => {
            const shouldUpdateThisProduct = product.id === savedProduct.id

            if (shouldUpdateThisProduct) {
              return { ...product, ...savedProduct }
            }

            return product
          }
        )
      } else {
        this.products = this.products.concat(savedProduct)
      }
    },

    async handleProductDelete ({ id }) {
      try {
        this.isLoading = true

        await api.delete(`products/${id}`)

        this.products = this.products.filter(
          (product) => product.id !== id
        )

        this.$notify({
          title: 'Produto excluido com sucesso.'
        })
      } catch (error) {
        console.error(error)
        this.$notify({
          type: 'error',
          title: 'Erro ao excluir produto',
          text: 'Atualize a página e tente novamente.'
        })
      } finally {
        this.isLoading = false
      }
    },

    onProductModalFormClose () {
      this.selectedProduct = {}
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
