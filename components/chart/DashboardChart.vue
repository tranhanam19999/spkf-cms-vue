<template>
  <div>
    <line-chart :chart-data="datacollection" :chartType="chartType" :rangeDate="rangeDate"></line-chart>
  </div>
</template>

<script>
  import LineChart from './LineChart'

  export default {
    props: {
      chartType: {
        type: String,
        default: "Views"
      },
      rangeDate: {
        type: Array,
        default: []
      }
    },
    components: {
      LineChart
    },
    computed: {
      console: () => console
    },
    data () {
      return {
        datacollection: {}
      }
    }
  }
</script>

<style>
</style>
