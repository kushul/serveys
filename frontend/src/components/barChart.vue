
<script>
// CommitChart.js
// import VueCharts from "vue-chartjs";
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: {
    qcmResult: {
      type: Object
    },
    label: {
      type: String
    }
  },
  data() {
    return {
      result: {}
    };
  },
  methods: {
    orderProductKey() {
      const unordered = this.qcmResult;

      const ordered = {};
      Object.keys(unordered)
        .sort()
        .forEach(function(key) {
          ordered[key] = unordered[key];
        });

      this.result = ordered;
    }
  },
  mounted() {
    this.orderProductKey();

    this.renderChart(
      {
        labels: Object.keys(this.result),
        datasets: [
          {
            label: "Result for each product",
            backgroundColor: "#66BB6A",
            data: Object.values(this.result)
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: true
              }
            }
          ]
        }
      }
    );
  }
};
</script>