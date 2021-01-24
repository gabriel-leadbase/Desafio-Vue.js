<template>
  <AdminLayout class="dashboard">
    <h1 class="title">
      Dashboard
    </h1>

    <div class="dashboard__stats">
      <Stats
        v-bind="totals"
      />
    </div>

    <h1 class="title">
      Vendas nos últimos 7 dias
    </h1>

    <div class="dashboard__chart">
      <IncomeChart
        :sales="sales"
      />
    </div>

    <h1 class="title">
      Ranking de vendas
    </h1>

    <div class="dashboard__ranking">
      <div class="data-cards">
        <div
          v-for="seller in ranking"
          :key="seller.user.id"
          class="data-cards__item"
        >
          <div class="data-cards__profile">
            <Avatar
              :src="seller.user.avatar_url"
            />

            <div class="data-cards__cell">
              <span class="data-cards__label">
                Representante
              </span>
              <span class="data-cards__text">
                {{ seller.user.name }}
              </span>
            </div>
          </div>

          <div class="data-cards__cell">
            <span class="data-cards__label">
              Un. vendidas
            </span>
            <span class="data-cards__text">
              {{ seller.totalItems }}
            </span>
          </div>

          <div class="data-cards__cell">
            <span class="data-cards__label">
              Ticket médio
            </span>
            <span class="data-cards__text">
              {{ numberToBRL(seller.averageTicket) }}
            </span>
          </div>

          <div class="data-cards__cell">
            <span class="data-cards__label">
              Total em vendas
            </span>
            <span class="data-cards__text text--primary">
              {{ numberToBRL(seller.totalValue) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from '@/components/Layouts/Admin'
import Stats from '@/components/Stats'
import Avatar from '@/components/Avatar'

import IncomeChart from './IncomeChart'
import api from '@/services/api'
import numberToBRL from '@/utils/numberToBRL'

export default {
  name: 'Dashboard',

  components: {
    Stats,
    AdminLayout,
    IncomeChart,
    Avatar
  },

  data () {
    return {
      sales: []
    }
  },

  computed: {
    totals () {
      const defaults = {
        averageTicket: 0,
        totalItems: 0,
        totalValue: 0
      }

      return this.sales
        .reduce((totals, sale) => {
          totals.totalValue += sale.total
          totals.totalItems += Number(sale.amount)
          totals.averageTicket = totals.totalValue / totals.totalItems

          return totals
        }, defaults)
    },

    ranking () {
      const defaultRankingData = {
        averageTicket: 0,
        totalItems: 0,
        totalValue: 0
      }

      const salesGrupedBySeller = this.sales
        .reduce((ranking, sale) => {
          const foundSellerRankingIndex = ranking.findIndex(sum => sum.user.id === sale.user.id)

          const rankingData = ranking[foundSellerRankingIndex]
            ? { ...ranking[foundSellerRankingIndex] }
            : { ...defaultRankingData }

          rankingData.user = sale.user
          rankingData.totalValue += sale.total
          rankingData.totalItems += Number(sale.amount)
          rankingData.averageTicket = rankingData.totalValue / rankingData.totalItems

          if (foundSellerRankingIndex !== -1) {
            ranking[foundSellerRankingIndex] = rankingData
            return ranking
          } else {
            return ranking.concat(rankingData)
          }
        }, [])

      return salesGrupedBySeller.sort(
        (sellerA, sellerB) => sellerB.totalValue - sellerA.totalValue
      )
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
          is_canceled: false
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
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
