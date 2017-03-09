import Vue from 'vue';
import Vuex from 'vuex';
import Echarts from './modules/echarts.js';
import Components from './modules/components.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules : {
    echarts : Echarts,
    components : Components
  }
});
