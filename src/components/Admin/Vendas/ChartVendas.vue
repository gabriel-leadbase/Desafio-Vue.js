<template>
   <q-page class="flex-center q-pa-md">
     <apexcharts height="350" type="bar" :options="chartOptions" :series="series"></apexcharts>
  </div>
  </q-page>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
   components: {
    apexcharts: VueApexCharts,
  },
  data() {
      return {
           series: [{
            name: 'vendas',
            data: [2.3, 3.1, 4.0, 10, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 15]
          }],


          chartOptions: {
            chart: {
              height: 350,
              type: 'bar',
            },

            plotOptions: {
              bar: {
                borderRadius: 10,
                dataLabels: {
                  position: 'top', // top, center, bottom
                },
              }
            },
            dataLabels: {
              enabled: true,
              formatter: function (val) {
                return val + "";
              },
              offsetY: -20,
              style: {
                fontSize: '12px',
                colors: ["#304758"]
              }
            },

            xaxis: {
              categories: ["00:00","00:01", "00:02", "00:03", "00:04", "00:05", "00:06", "00:07", "00:08", "00:09",
               "00:10", "00:11", "00:12","00:13", "00:14", "00:15", "00:16", "00:17", "00:18", "00:19", "00:20", "00:21", "00:22", "00:23"],
              position: 'top',
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              },
              crosshairs: {
                fill: {
                  type: 'gradient',
                  gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                  }
                }
              },
              tooltip: {
                enabled: true,
              }
            },
            yaxis: {
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
                formatter: function (val) {
                  return val + "";
                }
              }

            },
            title: {
              text: 'Gráfico de vendas por hora ao logo dos dias',
              floating: true,
              offsetY: 330,
              align: 'center',
              style: {
                color: '#444'
              }
            }
      }
      }

  }
}

</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto);

body {
  font-family: Roboto, sans-serif;
}

</style>
