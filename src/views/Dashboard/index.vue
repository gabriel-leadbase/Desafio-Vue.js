<template>
  <AdminLayout class="dashboard">
    <h1 class="title">
      Dashboard
    </h1>

    <div class="dashboard__stats">
      <div class="card">
        <span class="card__icon">
          <TrendingUpIcon size="24" />
        </span>

        <h4 class="card__title">
          R$ 385,00
        </h4>
        <p>
          Total em vendas
        </p>
      </div>

      <div class="card">
        <span class="card__icon">
          <ActivityIcon size="24" />
        </span>
        <h4 class="card__title">
          R$ 28,00
        </h4>
        <p>
          Ticket médio
        </p>
      </div>

      <div class="card">
        <span class="card__icon">
          <PackageIcon size="24" />
        </span>
        <h4 class="card__title">
          12.805
        </h4>
        <p class="card__info">
          Total de unidades venditas
        </p>
      </div>
    </div>

    <h1 class="title">
      Vendas nos últimos 7 dias
    </h1>

    <div class="dashboard__chart">
      <Chart
        :options="{
          lang: {
            months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            shortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            loading: ['Atualizando...']
          },
          chart: {
            backgroundColor: 'transparent',
            numberFormatter (currency) {
              return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(currency)
            },
          },
          title: false,
          yAxis: {
            gridLineColor: 'rgba(255, 255, 255, 0.025)',
            title: false
          },
          xAxis: {
            type: 'datetime',
          },
          series: [{
            name: 'Total em vendas',
            color: '#00EBFF',
            data: [
              [Date.UTC((new Date()).getUTCFullYear(), (new Date()).getUTCMonth(), (new Date()).getUTCDate()),88],
              [Date.UTC((new Date()).getUTCFullYear(), (new Date()).getUTCMonth(), (new Date()).getUTCDate()+1),89],
              [Date.UTC((new Date()).getUTCFullYear(), (new Date()).getUTCMonth(), (new Date()).getUTCDate()+2),0],
              [Date.UTC((new Date()).getUTCFullYear(), (new Date()).getUTCMonth(), (new Date()).getUTCDate()+3),102],
              [Date.UTC((new Date()).getUTCFullYear(), (new Date()).getUTCMonth(), (new Date()).getUTCDate()+4),114],
              [Date.UTC((new Date()).getUTCFullYear(), (new Date()).getUTCMonth(), (new Date()).getUTCDate()+5),120]
            ],
          }]
        }"
      />
    </div>

    <h1 class="title">
      Ranking de vendas
    </h1>

    <div class="dashboard__ranking">
      <div class="data-cards">
        <div class="data-cards__item">
          <div class="data-cards__profile">
            <div class="avatar">
              <img
                src="https://avatars.githubusercontent.com/u/17859531?s=460&u=bb0947e677d6b8810906ab7c7b95ee5c372de31e&v=4"
                alt="Avatar"
              >
            </div>

            <div class="data-cards__cell">
              <span class="data-cards__label">
                Representante
              </span>
              <span class="data-cards__text">
                Jimmy Bastos
              </span>
            </div>
          </div>

          <div class="data-cards__cell">
            <span class="data-cards__label">
              Un. vendidas
            </span>
            <span class="data-cards__text">
              4.323
            </span>
          </div>

          <div class="data-cards__cell">
            <span class="data-cards__label">
              Ticket médio
            </span>
            <span class="data-cards__text">
              R$ 37,00
            </span>
          </div>

          <div class="data-cards__cell">
            <span class="data-cards__label">
              Total em vendas
            </span>
            <span class="data-cards__text text--primary">
              R$ 158.000,00
            </span>
          </div>
        </div>

        <div class="data-cards__item">
          <div class="data-cards__profile">
            <div class="avatar">
              <img
                src="https://avatars.githubusercontent.com/u/17859531?s=460&u=bb0947e677d6b8810906ab7c7b95ee5c372de31e&v=4"
                alt="Avatar"
              >
            </div>

            <div class="data-cards__cell">
              <span class="data-cards__label">
                Representante
              </span>
              <span class="data-cards__text">
                Jimmy Bastos
              </span>
            </div>
          </div>

          <div class="data-cards__cell">
            <span class="data-cards__label">
              Un. vendidas
            </span>
            <span class="data-cards__text">
              4.323
            </span>
          </div>

          <div class="data-cards__cell">
            <span class="data-cards__label">
              Ticket médio
            </span>
            <span class="data-cards__text">
              R$ 37,00
            </span>
          </div>

          <div class="data-cards__cell">
            <span class="data-cards__label">
              Total em vendas
            </span>
            <span class="data-cards__text text--primary">
              R$ 158.000,00
            </span>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from '@/components/Layouts/Admin'

import { ActivityIcon, TrendingUpIcon, PackageIcon } from 'vue-feather-icons'

import { Chart } from 'highcharts-vue'

export default {
  name: 'Dashboard',

  components: {
    AdminLayout,
    Chart,
    ActivityIcon,
    TrendingUpIcon,
    PackageIcon
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
