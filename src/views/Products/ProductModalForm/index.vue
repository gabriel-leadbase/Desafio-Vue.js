<template>
  <Modal
    class="products-form"
    name="ProductModalForm"
    :title="isUpdating ? 'Editar Produto' : 'Novo Produto'"
    @close="handleModalClose"
    v-on="$listeners"
  >
    <form action="">
      <Input
        name="name"
        label="Titulo / Nome"
        v-model="formData.name"
      />

      <Input
        name="description"
        label="Descrição"
        v-model="formData.description"
      />

      <Input
        currency
        name="price"
        label="Preço"
        v-model="formData.price"
      />

      <Input
        name="image_url"
        label="Link da Imagem"
        placeholder="https://cdn.example.com.br/image.png"
        v-model="formData.image_url"
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
        @click="handleModalClose"
      >
        Cancelar
      </Button>
      <Button
        size="mini"
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
      defaultFormData,
      formData: { ...defaultFormData }
    }
  },

  watch: {
    initialData: {
      deep: true,
      immediate: true,
      handler (data) {
        this.formData = {
          ...this.initialData,
          ...data
        }
      }
    }
  },

  computed: {
    isUpdating () {
      return Boolean(this.initialData.id)
    }
  },

  methods: {
    handleModalClose () {
      this.$modal.hide('ProductModalForm')
      this.formData = { ...this.defaultFormData }
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
