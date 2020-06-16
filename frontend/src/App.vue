<template>
  <v-app :dark="theme">
    <v-content>
      <Header />
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { mapGetters } from "vuex";

export default {
  name: "App",

  components: {
    Header,
    Footer
  },
  methods: {
    setTheme() {
      if (this.darkmode == true) {
        return (this.$vuetify.theme.dark = true);
      } else {
        return (this.$vuetify.theme.dark = false);
      }
    }
  },
  computed: {
    ...mapGetters({
      darkmode: "ui/getDarkmode"
    }),
    theme() {
      return this.setTheme();
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
