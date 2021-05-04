<template>
  <v-row>
    <v-col cols="4">
      <v-select
        v-model="selectedChartType"
        :items="items"
        item-text="label"
        item-value="value"
        label="Biểu đồ theo"
        outlined
      ></v-select>
      <DashboardChart :chartType="selectedChartType.value ? selectedChartType.value : selectedChartType"/>
    </v-col>
  </v-row>
</template>

<script>
import DashboardChart from '../components/chart/DashboardChart'

export default {
  components: {
    DashboardChart
  },
  watch: {
    selectedChartType(newVal) {
      //console.log('aaaa ', newVal)
    }
  },
  // methods: {
  //   passChartType() {
  //     console.log(this.selectedChartType)
  //   }
  // },
  data() {
    return {
      selectedChartType: {
        label: 'Lượt xem',
        value: 'Views'
      },
      items: [
        {
          label: 'Lượt xem',
          value: 'Views'
        },
        {
          label: 'Lượt bài viết',
          value: 'Posts'
        },
        {
          label: 'Lượt bình luận',
          value: 'Comments'
        }
      ],
    }
  }
}
</script>
<style scoped>
.logout-btn {
  cursor: pointer
}
</style>
