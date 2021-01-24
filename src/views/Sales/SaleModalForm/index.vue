<template>
  <Modal
    class="products-form"
    name="SaleModalForm"
    :title="'Nova Venda'"
    @close="closeModal"
    v-on="$listeners"
  >
    <form
      ref="form"
    >
      <select v-model="formData.product">
        <option :value="{}">
          Selecione o medicamento
        </option>
        <option
          v-for="product in products"
          :key="product.id"
          :value="product"
        >
          {{ product.name }}
        </option>
      </select>

      <Input
        v-model="formData.amount"
        name="amount"
        label="Quantidade"
        :error="formErrors.amount"
      />

      <Input
        style="opacity: .75"
        :value="formData.product.price * formData.amount"
        currency
        name="total"
        label="Total"
        disabled
        :error="formErrors.price"
      />
    </form>

    <template #footer>
      <Button
        size="mini"
        type="translucid"
        @click="closeModal"
      >
        Cancelar
      </Button>
      <Button
        size="mini"
        :loading="isLoading"
        @click="handleFormSubmit(formData)"
      >
        Salvar
      </Button>
    </template>
  </Modal>
</template>

<script>
import * as Yup from 'yup'
import Modal from '@/components/Modal'
import Button from '@/components/Button'
import Input from '@/components/Input'

import api from '@/services/api'

import getValidationErrors from '@/utils/getValidationErrors'
import { mapGetters } from 'vuex'

export default {
  name: 'SaleModalForm',

  components: {
    Modal,
    Button,
    Input
  },

  data () {
    const defaultFormData = {
      user: {},
      product: {},
      amount: '',
      total: 0
    }

    return {
      isLoading: false,
      defaultFormData,
      formData: { ...defaultFormData },
      formErrors: {},
      products: []
    }
  },

  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },

  mounted () {
    this.loadProducts()
  },

  methods: {
    async loadProducts () {
      try {
        this.isLoading = true

        const { data: products } = await api.get('products')

        this.products = products.filter(product => product.is_active)
      } catch (error) {
        console.error(error)
        this.$notify({
          type: 'error',
          title: 'Erro ao listar medicamentos',
          text: 'Atualize a página e tente novamente'
        })
      } finally {
        this.isLoading = false
      }
    },

    async validate (formData) {
      const schema = Yup.object().shape({
        amount: Yup.number()
          .min(1, 'Informe a quantidade'),
        total: Yup.number()
          .required('Total obrigatório')
      })

      return await schema.validate(formData, { abortEarly: false })
    },

    async handleFormSubmit ({ product, amount }) {
      if (!product.id) {
        window.alert('Selecione o produto')
        return
      }

      amount = amount || 0

      const formData = {
        amount,
        total: amount * product.price,
        is_canceled: false,
        product: {
          id: product.id,
          name: product.name,
          price: product.price
        },
        user: {
          id: this.user.id,
          name: this.user.name,
          avatar_url: this.user.avatar_url
        }
      }

      try {
        this.isLoading = true
        this.formErrors = {}

        await this.validate(formData)

        const { data: sale } = await api.post('/sales', formData)

        this.$notify({
          type: 'success',
          title: 'Venda registrada com sucesso'
        })

        this.$emit('save', sale)

        this.closeModal()
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          this.$set(this, 'formErrors', getValidationErrors(error))
        } else {
          console.error(error)

          this.$notify({
            type: 'error',
            title: 'Erro ao registrar venda',
            text: 'Atualize a página e tente novamente'
          })
        }
      } finally {
        this.isLoading = false
      }
    },

    closeModal () {
      this.$modal.hide('SaleModalForm')
      this.formErrors = {}
      this.formData = { ...this.defaultFormData }
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
