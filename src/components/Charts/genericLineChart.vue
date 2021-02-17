<script>
import { Line, mixins } from 'vue-chartjs'
export default {
  extends: Line,
  name: 'line-chart',
  mixins: [mixins.reactiveProp],
  props: ['chart-options'],
  mounted () {
    this.renderChart(this.chartData, {
      responsive: true,
      maintainAspectRatio: false,
      ...this.chartOptions
    })
  }
}
</script>