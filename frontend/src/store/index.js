import Vue from "vue";
import Vuex from "vuex";
import ui from "./modules/ui";
import survey from "./modules/survey";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ui, survey
  },
});
