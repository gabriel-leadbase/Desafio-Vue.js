<template>
  <Modal
    class="products-form"
    name="ProductModalForm"
    :title="isUpdating ? 'Editar Produto' : 'Novo Produto'"
    @close="closeModal"
    v-on="$listeners"
  >
    <form
      ref="form"
    >
      <Input
        v-model="formData.name"
        required
        name="name"
        label="Titulo / Nome"
        :error="formErrors.name"
      />

      <Input
        v-model="formData.description"
        required
        name="description"
        label="Descrição"
        :error="formErrors.description"
      />

      <Input
        v-model="formData.price"
        required
        currency
        name="price"
        label="Preço"
        :error="formErrors.price"
      />

      <Input
        v-model.trim="formData.image_url"
        required
        name="image_url"
        label="Link da Imagem"
        placeholder="https://cdn.example.com.br/image.png"
        :error="formErrors.image_url"
      />

      <div class="form__toggle">
        <Toggle
          v-model="formData.is_active"
        >
          <template #label:before>
            <span>
              {{ formData.is_active ? 'Disponível' : 'Indisponível' }}
            </span>
          </template>
        </Toggle>
      </div>
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
import Toggle from '@/components/Toggle'

import api from '@/services/api'

import getValidationErrors from '@/utils/getValidationErrors'

export default {
  name: 'ProductModalForm',

  components: {
    Modal,
    Button,
    Input,
    Toggle
  },

  props: {
    initialData: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    const defaultFormData = {
      name: '',
      description: '',
      price: 0,
      is_active: true,
      image_url: ''
    }

    return {
      isLoading: false,
      defaultFormData,
      formData: { ...defaultFormData },
      formErrors: {}
    }
  },

  computed: {
    isUpdating () {
      return Boolean(this.initialData.id)
    }
  },

  watch: {
    initialData: {
      deep: true,
      immediate: true,
      handler (initialData) {
        this.formData = {
          ...this.defaultFormData,
          ...initialData
        }
      }
    }
  },

  methods: {
    async validate (formData) {
      const schema = Yup.object().shape({
        name: Yup.string()
          .required('Nome obrigatório'),
        description: Yup.string()
          .required('Descrição obrigatória'),
        image_url: Yup.string()
          .url('Insira uma url válida')
          .required('Foto obrigatória'),
        price: Yup.number()
          .required('Preço obrigatório')
      })

      return await schema.validate(formData, { abortEarly: false })
    },

    async handleFormSubmit ({ id, name, description, price, image_url, is_active }) {
      const formData = {
        id,
        name,
        description,
        price,
        image_url,
        is_active
      }

      try {
        this.isLoading = true
        this.formErrors = {}

        await this.validate(formData)

        const { data: product } = this.isUpdating
          ? await api.patch(`/products/${id}`, formData)
          : await api.post('/products', formData)

        this.$notify({
          type: 'success',
          title: 'Produto salvo com sucesso.'
        })

        this.$emit('save', product)

        this.closeModal()
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          this.$set(this, 'formErrors', getValidationErrors(error))
        } else {
          console.error(error)

          this.$notify({
            type: 'error',
            title: 'Erro ao salvar produto.',
            text: 'Atualize a página e tente novamente.'
          })
        }
      } finally {
        this.isLoading = false
      }
    },

    closeModal () {
      this.$modal.hide('ProductModalForm')
      this.formErrors = {}
      this.formData = { ...this.defaultFormData }
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
