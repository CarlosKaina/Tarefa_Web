import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:["Funk", "Sertanejo", "Pagode", "Rock", "POp", "Kpop"],
    title: "Bem vindo"
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    bigTitle(state){
      return state.title.toUpperCase()
    }
  }
})
