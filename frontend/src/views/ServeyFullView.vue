<template>
  <div class="container my-12">
    {{ error }}
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar dense class="blue-grey darken-3" dark v-if="survey">
        <v-btn icon to="/">
          <v-icon>arrow_back</v-icon>
        </v-btn>

        <v-toolbar-title class="pl-0">Survey {{ survey.name }} [{{ survey.code}}]</v-toolbar-title>
      </v-toolbar>
      <template v-if="!survey">
        <loading />
      </template>

      <v-card-text v-else class="pa-6">
        <div class="test" v-for="(item, index) in survey.results" :key="index">
          <div v-if="item.type == 'qcm'">
            <h1 class="product-title">{{ item.label }}</h1>
            <Barchart class="mb-12" :label="item.label" :qcmResult="item.result" />
          </div>
          <div v-if="item.type == 'numeric'">
            <h1 class="product-title">{{ item.label }}</h1>
            <DoughnutChart class="mb-12" :name="survey.name" :perc="productPerc" />
          </div>
          <div v-if="item.type == 'date'">
            <dateTimeline :date="item.result" :title="item.label" />
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Barchart from "../components/barChart";
import DoughnutChart from "../components/doughnutChart";
import dateTimeline from "../components/DateTimeline";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      // id: this.$route.params.id,
      items: [],
      qcmResult: []
    };
  },
  components: {
    Barchart,
    dateTimeline,
    DoughnutChart
  },
  created() {
    this.$store.dispatch("survey/retrieveHydratedSurveys");
  },
  computed: {
    ...mapGetters({
      surveys: "survey/getSurveys",
      error: "survey/getError"
    }),
    survey() {
      let survey = this.surveys.filter(
        survey => survey.code == this.$route.params.id
      );

      return survey ? survey[0] : {};
    },
    totalProducts() {
      console.log(this.surveys);
      return this.surveys.reduce((total, survey) => {
        console.log(survey);
        for (const result of survey.results) {
          // console.log(survey.name, result.type, result.result);
          if (result.type == "numeric") {
            return parseInt(result.result, 10) + total;
          }
        }
      }, 0);
    },
    productPerc() {
      let products = 0;
      for (const result of this.survey.results) {
        if (result.type == "numeric") {
          products = parseInt(result.result, 10);
        }
      }
      // console.log(products, this.totalProducts);
      return (products / this.totalProducts) * 100;
    }
  },
  watch: {
    error(value) {
      if (value) {
        this.$router.push({ name: "not-found" });
      }
    }
  }
  // mounted() {
  //   this.$http
  //     .get(this.$url + this.id + ".json", {
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Headers": "Content-Type, Authorization"
  //       }
  //     })
  //     .then(response => {
  //       this.items = response.data;
  //     })
  //     .catch(() => {
  //       this.$router.push({ name: "not-found" });
  //     });
  // },
};
</script>

<style>
.product-title {
  text-align: center;
  line-height: 35px;
  margin: 20px 0;
  color: rgba(0, 0, 0, 0.6);
}
</style>