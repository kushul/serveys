
<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: ["name", "perc"],
  mounted() {
    this.renderChart(
      {
        labels: [this.name, "Other"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#CCCCCC"],
            data: [this.perc, 100 - this.perc]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>