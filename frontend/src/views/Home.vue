<template>
  <div class="container mt-8">
    <v-toolbar dense color="transparent" class="blue-grey darken-3" dark flat>
      <v-btn icon disabled>
        <v-icon>list</v-icon>
      </v-btn>
      <v-toolbar-title class="ml-0 pl-0">List of Servey(s)</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        style="padding-bottom:8px;"
        class="pt-0"
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-toolbar>
    <v-data-table
      :search="search"
      :headers="headers"
      :items="serveys"
      :items-per-page="5"
      class="elevation-1"
      :loading="loadingState"
      loading-text="Loading... Please wait"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn
          icon
          color="info"
          class="ml-0"
          :to="{ name: 'serveyFullView', params: { id: item.code } }"
        >
          <v-icon>zoom_in</v-icon>
        </v-btn>
      </template>
      <template v-slot:no-data>
        <no-data alertMessage="No Servey Found"></no-data>
      </template>
    </v-data-table>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data() {
    return {
      search: "",
      serveys: [],
      loadingState: false,
      headers: [
        {
          text: "Name",
          align: "start",
          value: "name",
          width: "40%"
        },
        { text: "Code", value: "code", width: "40%" },
        { text: "Actions", value: "actions", sortable: false, width: "20%" }
      ]
    };
  },
  methods: {
    getServeyList(i) {
      return this.a[i];
    }
  },
  mounted() {
    this.loadingState = true;
    this.$http
      .get(this.$url + "list.json", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
      })
      .then(response => {
        this.serveys = response.data;
        this.loadingState = false;
      });
  }
};
</script>
