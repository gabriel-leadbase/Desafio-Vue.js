<template>
  <div class="generic_body chart_sells">
    <LineChart
      :chart-options="chartOptions"
      :width="350"
      :chart-data="chartData"
    />
  </div>
</template>

<script>
import LineChart from '../Charts/genericLineChart'

export default {
  name: 'ChartSells',
  props: [
    'data'
  ],
  data () {
    return {
      chartOptions: {
        maintainAspectRatio: false,
        responsive: true
      },
    }
  },
  computed: {
    chartData () {
      if (this.data) {
        const labels = [...new Set(this.data.map(x => x.day))]
        // const labelsFiltered = []
        // labels.forEach(el => {
        //   let fix = el.substr(0, 10).split('-').reverse().join('/').substr(0, 5)
        //   labelsFiltered.push(fix)
        // })

        const labelsFiltered = []
        labels.forEach(el => {
          let today = new Date(el)
          let month = today.getMonth() + 1
          console.log(today)
          let str = `${today.getDate() > 9 ? today.getDate() : '0' + today.getDate()}/${month > 9 ? month : '0' + month}`
          labelsFiltered.push(str)
        })

        const volume = []
        const value = []
        labels.forEach(el => {
          let insideVolume = 0
          let insideValue = 0
          this.data.forEach(dataItem => {
            if (el === dataItem.day) {
              insideVolume++
              insideValue += dataItem.total
            }
          })
          volume.push(insideVolume)
          value.push(insideValue)
        })

        const datasets = [
          {
            label: 'Volume de vendas',
            data: volume,
            fill: false,
            backgroundColor: '#027BE3',
            borderColor: '#027BE3'
          },
          {
            label: 'Valor das vendas',
            data: value,
            fill: false,
            backgroundColor: '#26A69A',
            borderColor: '#26A69A'
          }
        ]

        return {
          labels: labelsFiltered,
          datasets
        }
      }
      return null
    }
  },
  components: {
    LineChart
  }
}
</script>

<style>
.chart_sells{
  width: 100%;
}
</style>