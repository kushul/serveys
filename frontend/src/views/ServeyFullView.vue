<template>
  <div class="container my-12">
    <!-- <v-btn fab color="primary" class="mt-10 ml-10" top left absolute to="/">
      <v-icon>arrow_back</v-icon>
    </v-btn>-->

    <v-card color="grey lighten-4" flat tile>
      <v-toolbar dense class="blue-grey darken-3" dark>
        <v-btn icon to="/">
          <v-icon>arrow_back</v-icon>
        </v-btn>

        <v-toolbar-title class="pl-0">Survey {{ $route.params.id }}</v-toolbar-title>
      </v-toolbar>
      <template v-if="items.length == 0">
        <loading />
      </template>
      <v-card-text v-else class="pa-6">
        <div class="test" v-for="(item, index) in items" :key="index">
          <div v-if="item.type == 'qcm'">
            <h1 class="product-title">{{ item.label }}</h1>
            <Barchart class="mb-12" :label="item.label" :qcmResult="item.result" />
          </div>
          <div v-if="item.type == 'numeric'">
            <h1 class="product-title">{{ item.label }}</h1>
            <DoughnutChart class="mb-12" />
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
export default {
  data() {
    return {
      id: this.$route.params.id,
      items: [],
      qcmResult: []
    };
  },
  components: {
    Barchart,
    dateTimeline,
    DoughnutChart
  },
  mounted() {
    this.$http
      .get(this.$url + this.id + ".json", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        },
        proxy: {
          host: "127.0.0.1",
          port: 8080
        }
      })
      .then(response => {
        this.items = response.data;
      });
  },
  methods: {
    getArrayOfObject() {
      //   return this.items[i];
    }
    // getQcmResult() {
    //   let result = "";
    //   for (let i = 0; i < this.items.length; i++) {
    //     result += this.items[i];
    //   }
    //   console.log(result);
    //   return result;
    // }
  }
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