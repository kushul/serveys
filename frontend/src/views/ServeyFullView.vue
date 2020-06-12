<template>
  <div class="container mt-12">
    <v-btn fab color="primary" class="mt-10 ml-10" top left absolute to="/">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <div class="test" v-for="(item, index) in items" :key="index">
      <div v-if="item.type == 'qcm'">
        <Barchart :label="item.label" :qcmResult="item.result" />
      </div>
      <div v-if="item.type == 'numeric'">{{ item.result }}</div>
      <div v-if="item.type == 'date'">
        <dateTimeline :date="item.result" :title="item.label" />
      </div>
    </div>
  </div>
</template>

<script>
import Barchart from "../components/barChart";
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
    dateTimeline
  },
  mounted() {
    this.$http
      .get("http://127.0.0.1:8080/api/" + this.id + ".json", {
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