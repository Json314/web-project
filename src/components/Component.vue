<template lang="html">
  <div class="">
    <!-- <router-link :to="{name:'Hello'}">Hello</router-link> -->
    <child :data="textData"></child>
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
    computed: {
      textData (){
        //console.log(this.$store.state.components.textData)
        return this.$store.state.components.textData;
      }
    },
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
