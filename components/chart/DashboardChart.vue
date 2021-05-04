<template>
  <div>
    <line-chart :chart-data="datacollection" :chartType="chartType"></line-chart>
  </div>
</template>

<script>
  import LineChart from './LineChart'

  export default {
    props: {
      chartType: {
        type: String,
        default: "Views"
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
