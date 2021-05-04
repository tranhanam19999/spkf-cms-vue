<template>
  <v-row>
    <v-col cols="6">
      <v-row>
        <v-col>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Chọn mốc thời gian"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              range
              no-title
              color="primary"
              scrollable
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="menu = false"
              >
                Hủy
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="filterDate(date); $refs.menu.save(date)"
              >
                Chọn
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col>
          <v-select
            v-model="selectedChartType"
            :items="items"
            item-text="label"
            item-value="value"
            label="Biểu đồ theo"
          ></v-select>
        </v-col>
      </v-row>
      <DashboardChart :chartType="selectedChartType.value ? selectedChartType.value : selectedChartType"
                      :rangeDate="rangeDate"/>
    </v-col>
    <v-col>

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
  },
  computed: {
  },
  methods: {
    filterDate(date) {
      this.rangeDate = [...date]
    }
  },
  data() {
    return {
      rangeDate: [],
      date: [],
      menu: false,

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
