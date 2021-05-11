<template>
  <div>
  <v-row>
    <v-col cols="7">
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
    <v-col cols="12" md="5" lg="5" class="d-flex flex-wrap justify-space-between">
      <v-card class="mb-4 px-2 py-2 accent hover-scale text-center" width="48%">
        <v-card-title class="px-0 text-center secondary--text">
          <h3 class="text-subtitle-1 mx-auto">Lượng tài khoản</h3>
        </v-card-title>

        <v-card-text class="text-h3 primary--text">3524</v-card-text>
      </v-card>
      <v-card class="mb-4 px-2 py-2 accent hover-scale text-center" width="48%">
        <v-card-title class="px-0 text-center secondary--text">
          <h3 class="text-subtitle-1 mx-auto">Lượt đăng nhập mới</h3>
        </v-card-title>

        <v-card-text class="text-h3 primary--text">25</v-card-text>
      </v-card>
      <v-card class="mb-4 px-2 py-2 accent hover-scale text-center" width="48%">
        <v-card-title class="px-0 text-center secondary--text">
          <h3 class="text-subtitle-1 mx-auto">Tổng online trong ngày</h3>
        </v-card-title>

        <v-card-text class="text-h3 primary--text">1342</v-card-text>
      </v-card>
      <v-card class="mb-4 px-2 py-2 accent hover-scale text-center" width="48%">
        <v-card-title class="px-0 text-center secondary--text">
          <h3 class="text-subtitle-1 mx-auto">Đang online</h3>
        </v-card-title>
        <v-card-text class="text-h3 primary--text">67</v-card-text>
      </v-card>
      <v-card class="mb-4 px-2 py-2 accent hover-scale text-center" width="48%">
        <v-card-title class="px-0 text-center secondary--text">
          <h3 class="text-subtitle-1 mx-auto">Báo cáo</h3>
        </v-card-title>
        <v-card-text class="text-h3 primary--text">5</v-card-text>
      </v-card>
      <v-card class="mb-4 px-2 py-2 accent hover-scale text-center" width="48%">
        <v-card-title class="px-0 text-center secondary--text">
          <h3 class="text-subtitle-1 mx-auto">Feedback</h3>
        </v-card-title>
        <v-card-text class="text-h3 primary--text">15</v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="7">
      <v-card class="" outlined>
        <v-card-title class="d-flex justify-space-between">
          <h3 class="text-h6">Bài viết cần xử lý</h3>
          <v-hover v-slot="{ hover }">
            <nuxt-link
              class="subtitle-1 text-decoration-none links primary--text"
              :class="{ 'secondary--text': hover }"
              to="/article/list"
            >Xem tất cả</nuxt-link>
          </v-hover>
        </v-card-title>
        <ReportedPost />
      </v-card>
    </v-col>
    <v-col cols="5">
      <v-card outlined>
        <v-card-title class="d-flex justify-space-between">
          <h3 class="text-h6">Feedback từ người dùng</h3>
          <v-hover v-slot="{ hover }">
            <nuxt-link
              class="subtitle-1 text-decoration-none links primary--text"
              :class="{ 'secondary--text': hover }"
              to="/article/list"
            >Xem tất cả</nuxt-link>
          </v-hover>
        </v-card-title>
        <UserFeedback />
      </v-card>
    </v-col>
  </v-row>
  </div>
</template>

<script>
import DashboardChart from '@/components/Chart/DashboardChart'
import ReportedPost from '@/components/Tables/ReportedPost'
import UserFeedback from '@/components/Tables/UserFeedback'
export default {
  components: {
    DashboardChart,
    ReportedPost,
    UserFeedback
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
        label: 'Lượt truy cập',
        value: 'Views'
      },
      items: [
        {
          label: 'Lượt truy cập',
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
  },
  created() {
    if (!this.$store.state.isAuth && !localStorage.getItem('roleList')) {
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
.logout-btn {
  cursor: pointer
}
</style>
