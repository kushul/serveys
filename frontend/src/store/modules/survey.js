import Vue from "vue";
import axios from "axios";

const url = "http://127.0.0.1:8080/api/";
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
}

const survey = {
    namespaced: true,

    state: {
        surveys: [],
        error: null,
    },
    getters: {
        getSurveys(state) {
            return state.surveys;
        },
        getError(state) {
            return state.error;
        },
    },
    mutations: {
        setSurveys(state, payload) {
            Vue.set(state, "surveys", payload);
        },
        setError(state, payload) {
            Vue.set(state, "error", payload);
        }
    },
    actions: {
        async retrieveSurveys({ commit }) {
            commit("setError", null);
            try {
                let response = await axios.get(url + "list.json", {
                    headers
                });
                commit("setSurveys", response.data);
            } catch (e) {
                commit("setError", e);
            }
        },
        async retrieveHydratedSurveys({ commit }) {
            commit("setError", null);
            try {
                let response = await axios.get(url + "list.json", {
                    headers
                });
                let surveys = await Promise.all(response.data.map(async (survey) => {
                    let response = await axios.get(url + survey.code + ".json", {
                        headers
                    });
                    return { ...survey, results: response.data }
                }))
                commit("setSurveys", surveys);
            } catch (e) {
                commit("setError", e);
            }
        },
    },
};

export default survey;
