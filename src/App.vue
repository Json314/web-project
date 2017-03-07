<template>
  <div id="app">
    <slide-bar></slide-bar>
    <nav-bar></nav-bar>
    <router-view class="container"></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import navBar from './components/Nav.vue';
import slideBar from './components/Slidebar.vue';
import myFooter from './components/Footer.vue';
import store from './store/store.js';
export default {
  name: 'app',
  store,
  components :{
    navBar,
    slideBar,
    myFooter
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    .su-navbar{
      background-color: #fff;
      box-shadow: 0 1px 2px rgba(0,0,0,.08);
      li{
        a{
          color: #333;
          font-weight: 600;
        }
      }
    }
  }
</style>
