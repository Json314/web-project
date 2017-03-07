import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Component from '@/components/Component';
import Echarts from '@/components/Echarts';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path : '/' ,
      name : 'home' ,
      component : Home
    },
    {
      path : '/components' ,
      name : 'components' ,
      component : Component
    },
    {
      path : '/echarts' ,
      name : 'echarts' ,
      component : Echarts
    }
  ]
});
