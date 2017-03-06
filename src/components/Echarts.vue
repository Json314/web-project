<template lang="html">
  <div class="">
    <div class="echarts">
      <div class="echarts-item" v-map.data:series="data">

      </div>
    </div>

    <div class="line"></div>
    <div class="echarts">
      <div class="">

      </div>
    </div>
  </div>

</template>

<script>
// require('../../static/echarts.min.js');
import Vue from 'vue'
Vue.directive('map',{
  inserted : function(el,binding,vnode){
    // console.log(el)
    var myChart = echarts.init(el);
    //console.log(binding.value)
    //获取指令上的绑定数据
    var timeData = binding.value.series;
    var option = {
        title: {
            text: '雨量流量关系图',
            subtext: '数据来自西安兰特水电测控技术有限公司',
            x: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false
            }
        },
        legend: {
            data:['流量','降雨量'],
            x: 'left'
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: [
            {
                show: true,
                realtime: true,
                start: 30,
                end: 70,
                xAxisIndex: [0, 1]
            },
            {
                type: 'inside',
                realtime: true,
                start: 30,
                end: 70,
                xAxisIndex: [0, 1]
            }
        ],
        grid: [{
            left: 50,
            right: 50,
            height: '35%'
        }, {
            left: 50,
            right: 50,
            top: '55%',
            height: '35%'
        }],
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLine: {onZero: true},
                data: timeData
            },
            {
                gridIndex: 1,
                type : 'category',
                boundaryGap : false,
                axisLine: {onZero: true},
                data: timeData,
                position: 'top'
            }
        ],
        yAxis : [
            {
                name : '流量(m^3/s)',
                type : 'value',
                max : 500
            },
            {
                gridIndex: 1,
                name : '降雨量(mm)',
                type : 'value',
                inverse: true
            }
        ],
        series : [
            {
                name:'流量',
                type:'line',
                symbolSize: 8,
                hoverAnimation: false,
                data: binding.value.series[0]
            },
            {
                name:'降雨量',
                type:'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                symbolSize: 8,
                hoverAnimation: false,
                data: binding.value.series[1]
            }
        ]
    };

    myChart.setOption(option);

  },

});
export default {
  name : 'echarts',
  computed : {        //来自echarts.js传递过来的数据
    data : function(){
      return this.$store.state.echarts.data;
    }
  }
}
</script>

<style lang="scss">
  .echarts{
    position: relative;
    height: 400px;
    .echarts-item{
      height: 400px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
</style>
