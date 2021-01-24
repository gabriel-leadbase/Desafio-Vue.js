<template>
  <SellerLayout class="dashboard">
    <template
      v-if="$can('sales:create')"
      #header:action
    >
      <Button
        type="success"
        @click="handleSaleCreate"
      >
        Nova Venda

        <template #label:after>
          <PlusSquareIcon
            size="24"
          />
        </template>
      </Button>

      <SaleModalForm
        ref="SaleModalForm"
        :initial-data="selectedSale"
        @save="handleSaleSave"
        @close="onSaleModalFormClose"
      />
    </template>

    <h1 class="title">
      Resumo
    </h1>

    <div class="sales__stats">
      <Stats
        v-bind="totals"
      />
    </div>

    <h1 class="title">
      Vendas
    </h1>

    <div class="sales__ranking">
      <div class="data-cards">
        <div
          v-for="sale in sales"
          :key="sale.id"
          class="data-cards__item"
        >
          <div class="data-cards__cell">
            <span class="data-cards__label">
              Medicamento
            </span>
            <span class="data-cards__text">
              {{ sale.product.name }}
            </span>
          </div>

          <div class="data-cards__cell">
            <span class="data-cards__label">
              Un. vendidas
            </span>
            <span class="data-cards__text">
              {{ Number(sale.amount) }}
            </span>
          </div>

          <div class="data-cards__cell">
            <span class="data-cards__label">
              Ticket médio
            </span>
            <span class="data-cards__text">
              {{ numberToBRL(sale.total / Number(sale.amount)) }}
            </span>
          </div>

          <div class="data-cards__cell">
            <span class="data-cards__label">
              Total
            </span>
            <span class="data-cards__text text--primary">
              {{ numberToBRL(sale.total) }}
            </span>
          </div>
          <div
            class="data-cards__cell data-cards__cell--actions"
          >
            <Button
              v-if="!sale.is_canceled"
              class="data-cards__action"
              type="translucid"
              size="mini"
              @click="handleSaleCancel(sale)"
            >
              Cancelar Venda
            </Button>
            <small v-else>
              Venda Cancelada
            </small>
          </div>
        </div>
      </div>
    </div>
  </SellerLayout>
</template>

<script>
import SaleModalForm from './SaleModalForm'

import { PlusSquareIcon } from 'vue-feather-icons'

import SellerLayout from '@/components/Layouts/Seller'
import Button from '@/components/Button'
import Stats from '@/components/Stats'
import api from '@/services/api'
import { mapGetters } from 'vuex'
import numberToBRL from '@/utils/numberToBRL'

export default {
  name: 'Sales',

  components: {
    SaleModalForm,
    PlusSquareIcon,
    Button,
    SellerLayout,
    Stats
  },

  data () {
    return {
      sales: [],
      selectedSale: {}
    }
  },

  computed: {
    ...mapGetters({
      user: 'auth/user'
    }),

    totals () {
      const defaults = {
        averageTicket: 0,
        totalItems: 0,
        totalValue: 0
      }

      return this.sales
        .filter(sale => !sale.is_canceled)
        .reduce((totals, sale) => {
          totals.totalValue += sale.total
          totals.totalItems += Number(sale.amount)
          totals.averageTicket = totals.totalValue / totals.totalItems

          return totals
        }, defaults)
    }
  },

  mounted () {
    this.loadSales()
  },

  methods: {
    numberToBRL,

    async loadSales () {
      try {
        this.isLoading = true

        const params = {
          'user.id': this.user.id
        }

        const { data: sales } = await api.get('sales', { params })

        this.sales = sales
      } catch (error) {
        console.error(error)
        this.$notify({
          type: 'error',
          title: 'Erro ao listar vendas',
          text: 'Atualize a página e tente novamente'
        })
      } finally {
        this.isLoading = false
      }
    },

    handleSaleCreate () {
      this.$modal.show('SaleModalForm')
    },

    async handleSaleSave (newSale) {
      this.sales = this.sales.concat(newSale)
    },

    async handleSaleCancel ({ id }) {
      try {
        this.isLoading = true

        const { data: newSale } = await api.patch(`sales/${id}`, { is_canceled: true })

        this.sales = this.sales.map(
          (sale) => sale.id === id
            ? { ...sale, ...newSale }
            : sale
        )

        this.$notify({
          title: 'Venda cancelada'
        })
      } catch (error) {
        console.error(error)
        this.$notify({
          type: 'error',
          title: 'Erro ao cancelar venda',
          text: 'Atualize a página e tente novamente'
        })
      } finally {
        this.isLoading = false
      }
    },

    onSaleModalFormClose () {
      this.selectedSale = {}
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
