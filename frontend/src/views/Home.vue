<template>
  <div class="container mt-8 survey-table-wrapper">
    <v-toolbar dense color="transparent" class="blue-grey darken-3" dark flat>
      <v-btn icon disabled>
        <v-icon>list</v-icon>
      </v-btn>
      <v-toolbar-title class="ml-0 pl-0">List of Survey(s)</v-toolbar-title>
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
      :items="surveys"
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
          :to="{ name: 'surveyFullView', params: { id: item.code } }"
        >
          <v-icon>zoom_in</v-icon>
        </v-btn>
      </template>
      <template v-slot:no-data>
        <no-data alertMessage="No Survey Found"></no-data>
      </template>
    </v-data-table>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      search: "",
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
    getSurveyList(i) {
      return this.a[i];
    }
  },
  created() {
    this.$store.dispatch("survey/retrieveHydratedSurveys");
  },
  computed: {
    ...mapGetters({
      surveys: "survey/getSurveys"
    })
  }
};
</script>


<style lang="scss">
@media (max-width: 600px) {
  .survey-table-wrapper {
    .v-btn__content {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
}
</style>