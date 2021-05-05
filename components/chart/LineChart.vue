
<script>
  import { Line, mixins } from 'vue-chartjs'
  import data from '../../static/mockData'
  const { reactiveProp } = mixins
  export default {
    data() {
      return {
        datacollection: {
          labels: ["Lượng truy cập", "Ngày"],
          datasets: []
        },
        mockDate: [...data.mockChart],
      }
    },
    extends: Line,
    mixins: [reactiveProp],
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
    watch: {
      chartType() {
        this.renderDBChart(this.chartType, this.rangeDate)
      },
      rangeDate() {
        this.renderDBChart(this.chartType, this.rangeDate)
      }
    },
    methods: {
      renderDBChart(type, rangeDate) {
        const chart = {}
        if ( type == "Comments" ) {
          chart.name = "Tổng bình luận"
          chart.data = [
            this.mockDate[0].totalComments,
            this.mockDate[1].totalComments,
            this.mockDate[2].totalComments,
            this.mockDate[3].totalComments,
            this.mockDate[4].totalComments
          ]
        }
        else if ( type == "Posts" ) {
          chart.name = "Tổng bài viết"
          chart.data = [
            this.mockDate[0].totalPosts,
            this.mockDate[1].totalPosts,
            this.mockDate[2].totalPosts,
            this.mockDate[3].totalPosts,
            this.mockDate[4].totalPosts
          ]
        }
        else {
          chart.name = "Tổng lượt truy cập"
          chart.data = [
            this.mockDate[0].totalViews,
            this.mockDate[1].totalViews,
            this.mockDate[2].totalViews,
            this.mockDate[3].totalViews,
            this.mockDate[4].totalViews
          ]
        }
        this.gradient = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);

        this.gradient.addColorStop(0, "rgba(15, 76, 129, 0.9)");
        this.gradient.addColorStop(0.5, "rgba(15, 76, 129, 0.25)");
        this.gradient.addColorStop(1, "rgba(15, 76, 129, 0)");

        this.renderChart(
          {
            labels: [
              this.mockDate[0].date,
              this.mockDate[1].date,
              this.mockDate[2].date,
              this.mockDate[3].date,
              this.mockDate[4].date,
            ],
            datasets: [
              {
                label: chart.name,
                borderColor: "#0F4C81",
                pointBackgroundColor: "#0F4C81",
                pointBorderColor: "white",
                borderWidth: 1,
                backgroundColor: this.gradient,
                data: chart.data
              },
            ]
          },
          { responsive: true, maintainAspectRatio: false }
        );
      }
    },
    mounted () {
      this.renderDBChart()
      //this.renderChart(this.chartData, this.options)
    }
}
</script>


