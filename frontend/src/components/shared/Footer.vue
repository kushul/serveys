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
      <v-btn-toggle
        flat
        icon
        small
        class="transparent elevation-0 ml-2"
        v-model="$vuetify.theme.dark"
      >
        <v-btn flat icon small :value="true" class="transparent">
          <v-icon>invert_colors</v-icon>
        </v-btn>
      </v-btn-toggle>
    </div>
  </v-footer>
</template>