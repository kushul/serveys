import Vue from "vue";


const ui = {
    namespaced: true,

    state: {
        darkmode: false,
    },
    mutations: {
        setDarkmode(state, payload) {
            Vue.set(state, "darkmode", payload);
        },
    },
    actions: {
        changeDarkmode({ commit }, payload) {
            commit("setDarkmode", payload);
        },
    },
    getters: {
        getDarkmode(state) {
            return state.darkmode;
        },
    },
};

export default ui;
