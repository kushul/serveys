<template>
  <v-alert
    outlined
    :value="true"
    class="alert-listing-wrapper ma-0 d-flex justify-center"
    dark
    color="info"
    icon="info"
  >
    <span>{{ alertMessage }}</span>
  </v-alert>
</template>

<script>
export default {
  props: {
    alertMessage: {
      type: String
    }
  }
};
</script>

<style>
.alert-listing-wrapper div {
  flex: unset !important;
}
</style>