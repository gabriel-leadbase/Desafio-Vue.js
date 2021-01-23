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
      @close="onProductModalFormClose"
    />
  </AdminLayout>
</template>

<script>
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
      products: [
        {
          id: 1,
          name: 'Diazepam',
          description: 'Lorem ipsum dolor sit amet.',
          price: 'R$ 19,50',
          is_active: false,
          image_url: 'https://www.farmadireta.com.br/imagens/300x300/Medicamento-controlado-generico-comprimidos-farmadireta.png'
        },
        {
          id: 2,
          name: 'Silvestantina',
          description: 'Lorem ipsum dolor sit amet.',
          price: 'R$ 28,50',
          is_active: true,
          image_url: 'https://extrafarma.vtexassets.com/arquivos/ids/161309-800-450?width=800&height=450&aspect=true'
        }
      ]
    }
  },

  methods: {
    handleProductCreate () {
      this.$modal.show('ProductModalForm')
    },

    handleProductEdit (product) {
      this.selectedProduct = product
      this.$modal.show('ProductModalForm')
    },

    handleProductDelete (product) {

    },

    onProductModalFormClose () {
      this.selectedProduct = {}
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
