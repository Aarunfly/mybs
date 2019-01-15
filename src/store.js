import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
       loginFlag:false,
       loginmodel:false,
  },
  mutations: {
      changeLoginStatus(state){
          state.loginFlag=true;
      },
      openLoginModel(state){
          state.loginmodel=true;
      }
  },
  actions: {

  },
});