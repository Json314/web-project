<template lang="html">
  <div class="">

    <div class="row item">
      <div class="col-sm-4 name">
        <img class="img-responsive" src="../assets/carousel_4.jpg" alt="" />
        <p>DANIEL PRATT</p>
        <div class="name-label"></div>
      </div>
      <div class="col-sm-8 name-desc">
					<h2>TALENTED DESIGNER &amp; <br>FRONT-END DEVELOPER <br>ENJOYING THE BEAUTIFUL NYC</h2>
					<div class="col-md-6">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
						<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
					</div>
					<div class="col-md-6">
						<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
						<p> Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
					</div>

			</div>
    </div>
    <div class="sep about"></div>
    <!-- 表单部分 -->
    <div class="row child-container">
      <div class="col-sm-5 left">
        <div class="list-container">
          <div class="scroll" v-carousel.params="carouselParams">
            <div class="text-item" v-for="item in list" :key="item">{{item}}</div>
          </div>
        </div>
      </div>
      <div class="col-sm-7 right">
        <form class="form-horizontal">
          <div class="form-group">
            <label for="values" class="col-sm-2 control-label">文本</label>
            <div class="col-sm-10">
              <input id="values" class="form-control" type="text" name="test" v-model.prevent="values">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button class="btn btn-default" @click.prevent="confirmAdd">确认添加</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="sep block_2"></div>

    <div class="row mt centered">
			<h1>MY DESIGN PROCESS</h1>
			<div class="col-sm-4 proc">
				<i class="fa fa-coffee"></i>
				<h3>The Meeting</h3>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
			</div>
			<div class="col-sm-4 proc">
				<i class="fa fa-cogs"></i>
				<h3>The Ideas</h3>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
			</div>
			<div class="col-sm-4 proc">
				<i class="fa fa-heart"></i>
				<h3>The Product</h3>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
			</div>

		</div>

  </div>
</template>

<script>
  import Vue from 'vue';
  /*
  *跑马灯
  *父元素必须设定高度，当前元素position为relative
  *指令传递参数
  */
  Vue.directive('carousel',{
    inserted : function(el , binding , vnode){
      // console.log(el);
      $(el).css('position','relative');
      let carouselParams = binding.value;
      let top = carouselParams.top;
      setInterval(function(){
        if(top == -$(el).height()){
          top = 300;
        }else{
          top--;
          $(el).css({top:top + 'px'});
        }

      },carouselParams.speed);
    }
  });
  export default {
    name : 'child',
    props : ['data'],
    data () {
      return {
        list : this.data.textList,
        values : this.data.defaultValue,
        carouselParams : {
          speed : 10,
          top : 300
        }
      }
    },
    computed: {
    },
    ready () {},
    attached () {},
    methods: {
      confirmAdd(){
        if(this.values){
          // this.list.shift();
          this.list.push(this.values);
          // this.values = '';
        }else{
            //提示消息
            noty({
                    text        : '请先输入！',
                    type        : 'information',  // success, error, warning, information, notification
                    dismissQueue: true,
                    // timeout: true,
                    closeWith: ['click'], // ['click', 'button', 'hover', 'backdrop'] // backdrop click will close all notifications
                    layout      : 'topRight',
                    theme       : 'defaultTheme'
                });
        }
      }
    },
    events: {
    },
    components: {}
  }
</script>

<style lang="scss" scope>

  .item{
    margin-bottom: 30px;
  }
  .about {
    background-image: url(../assets/about-sep.jpg);
  }
  .block_2{
    background-image: url(../assets/portfolio-sep.jpg);
  }

  .sep {
    background-attachment: fixed;
    background-position: 50% 0;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 450px;
    position: relative;
    margin-bottom: 30px;
  }
  .name{
    text-align: center;
    p{
    font-size: 22px;
    font-weight: lighter;
    margin-top: 15px;
    letter-spacing: 2px;
    }
    .name-label {
      width: 60px;
      height: 60px;
      margin: 0 auto 45px;
      border-top: 1px solid #000;
      background: url(../assets/name-label.png) center bottom no-repeat;
      background-size: 35px 35px;
    }
  }
  .name-desc {
     h2{
       font-family: 'Oswald', sans-serif;
       font-size: 40px;
       line-height: 1.45;
       font-weight: 300;
     }
     p{
       font-size: 16px;
       font-weight: 400;
     }
  }

  .child-container{
    height: 300px;
    margin-bottom: 30px;
    .left{
      height: 100%;
      .text-item{
        font-size: 16px;
        font-weight: 200;
        padding: 10px 0;
      }
      .list-container{
        height: 100%;
        padding: 15px;
        overflow-y: auto;
        position: relative;
      }
      .list-container:after{
        content: '';
        display: block;
        width: 1px;
        height: 100%;
        position: absolute;
        right: 0px;
        margin-left: 10px;
        bottom: 0;
        border-right: 1px solid #ccc;
      }
    }
    .left,.right{
      padding: 15px;
    }
  }

  .centered{
    .fa{
      font-size: 50px;
    }
    h1 {
      font-weight: 300;
      text-align: center;
      margin-bottom: 50px;
    }
    .proc {
      padding-top: 15px;
      padding-bottom: 15px;
      border-bottom: solid 2px transparent;
    }
    .proc:hover {
      background-color: #eee;
      border-bottom: solid 2px #2f2f2f;
    }
  }

</style>
