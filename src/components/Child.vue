<template lang="html">
  <div class="">

    <div class="row">
      <div class="col-sm-4">
        <div v-for="item in list" :key="item">{{item}}</div>
      </div>
      <div class="col-sm-8">
        <form class="form-horizontal">
          <div class="form-group">
            <label for="values" class="col-sm-2 control-label">文本</label>
            <div class="col-sm-10">
              <input id="values" class="form-control" type="text" name="test" v-model.lazy.prevent="values">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button class="btn btn-default" @click="confirmAdd">确认添加</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'child',
  props : ['data'],
  data () {
    return {
      list : ['div1','div2','div3'],
      values : this.data
    }
  },
  computed: {
  },
  ready () {},
  attached () {},
  methods: {
    confirmAdd(){
      if(this.values){
                this.list.push(this.values);
                this.values = '';
              }else{
                  alert('请先输入！');
              }
    }
  },
  events: {
  },
  components: {}
}
</script>

<style lang="css">
</style>
