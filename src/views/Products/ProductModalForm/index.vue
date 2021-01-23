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
      />

      <Input
        v-model="formData.description"
        required
        name="description"
        label="Descrição"
      />

      <Input
        v-model="formData.price"
        required
        currency
        name="price"
        label="Preço"
      />

      <Input
        v-model="formData.image_url"
        required
        name="image_url"
        label="Link da Imagem"
        placeholder="https://cdn.example.com.br/image.png"
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
import Modal from '@/components/Modal'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Toggle from '@/components/Toggle'

import api from '@/services/api'

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
      formData: { ...defaultFormData }
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

        const { data: product } = this.isUpdating
          ? await api.patch(`/products/${formData.id}`, formData)
          : await api.post('/products', formData)

        this.$notify({
          type: 'Success',
          title: 'Produto salvo com sucesso.'
        })

        this.$emit('save', product)
      } catch (error) {
        console.error(error)
        this.$notify({
          type: 'error',
          title: 'Erro ao salvar produto.',
          text: 'Atualize a página e tente novamente.'
        })
      } finally {
        this.isLoading = false

        this.closeModal()
      }
    },

    closeModal () {
      this.$modal.hide('ProductModalForm')
      this.formData = { ...this.defaultFormData }
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
