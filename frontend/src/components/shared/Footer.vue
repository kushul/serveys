<template>
  <v-footer
    padless
    dark
    fix
    class="v-footer blue-grey font-weight-medium darken-4 elevation-2 v-sheet v-sheet--tile"
    data-booted="true"
  >
    <div class="text-center d-flex justify-center align-center col col-12">
      2020 —
      <strong class="ml-1">Surveys</strong>
      <v-btn-toggle icon small class="transparent elevation-0 ml-2" v-model="darkmode">
        <v-btn icon small :value="true" class="transparent">
          <v-icon>invert_colors</v-icon>
        </v-btn>
      </v-btn-toggle>
    </div>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      goDark: true
    };
  },
  computed: {
    darkmode: {
      get: function() {
        return this.$store.getters["ui/getDarkmode"];
      },
      set: function(value) {
        this.$store.dispatch("ui/changeDarkmode", value);
      }
    }
  }
};
</script>