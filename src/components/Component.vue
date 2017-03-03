<template lang="html">
  <div class="">
    <h1>组件之间的数据传递</h1>
    <router-link :to="{name:'Hello'}">Hello</router-link>
    <child data="hello"></child>
  </div>
</template>

<script>
  import $ from 'jquery'
  import child from './Child.vue'
  //父模板中传入data数据，显示，修改数据
  export default {
    name : 'components',
    props : [],
    data () {
      return {
      }
    },
    computed: {},
    ready () {},
    attached () {},
    methods: {
    },
    components: {
      child
    }
  }
</script>

<style lang="scss">
</style>
