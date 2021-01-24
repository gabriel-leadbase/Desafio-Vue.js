<template>
  <Chart
    :options="{...options, series: [dataset]}"
  />
</template>

<script>
import numberToBRL from '@/utils/numberToBRL'
import { Chart } from 'highcharts-vue'
import { subDays, isSameDay, parseISO, getTime } from 'date-fns'

export default {
  name: 'IncomeChart',

  components: { Chart },

  props: {
    sales: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      options: {
        lang: {
          months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
          shortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
          weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
          loading: ['Atualizando...']
        },
        chart: {
          backgroundColor: 'transparent',
          numberFormatter: numberToBRL
        },
        title: false,
        yAxis: {
          gridLineColor: 'rgba(255, 255, 255, 0.025)',
          title: false
        },
        xAxis: {
          type: 'datetime'
        }
      }
    }
  },
  computed: {
    dataset () {
      const today = new Date()

      const sumDateSales = (date) => {
        return this.sales.reduce((sum, sale) => {
          const isSameDate = isSameDay(date, parseISO(sale.created_at))
          return isSameDate ? sum + sale.total : sum
        }, 0)
      }

      return {
        name: 'Total em vendas',
        color: '#00EBFF',
        data: [
          [getTime(subDays(today, 6)), sumDateSales(subDays(today, 6))],
          [getTime(subDays(today, 5)), sumDateSales(subDays(today, 5))],
          [getTime(subDays(today, 4)), sumDateSales(subDays(today, 4))],
          [getTime(subDays(today, 3)), sumDateSales(subDays(today, 3))],
          [getTime(subDays(today, 2)), sumDateSales(subDays(today, 2))],
          [getTime(subDays(today, 1)), sumDateSales(subDays(today, 1))],
          [getTime(subDays(today, 0)), sumDateSales(subDays(today, 0))]
        ]
      }
    }
  }
}
</script>
