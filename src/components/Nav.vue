<template lang="html">
  <nav class="navbar su-navbar">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">拉不拉卡</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><router-link :to="{name:'echarts'}">Echarts</router-link></li>
          <li class="active"><router-link :to="{name:'components'}">Component</router-link></li>
          <li><router-link :to="{name:'Hello'}">Hello</router-link></li>
        </ul>
        <form class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control input" placeholder="Search" @focusin="focusin" @focusout="focusout">
          </div>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Plugin <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="https://vuefe.cn/">Vue</a></li>
              <li><a href="https://vuex.vuejs.org/">Vuex</a></li>
              <li><a href="https://router.vuejs.org/">Vue-router</a></li>
                <li><a href="http://www.bootcss.com/">Bootstrap</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="javascript:void(0)">Thanks</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
export default {
  methods : {
    focusin : function(event){    //input获取焦点
      $(event.target).addClass('active');
      // console.log(this.$route.params);
      // this.$router.push('/hello');
    },
    focusout : function(event){   //input失去焦点
      $(event.target).removeClass('active');
    }
  }
}
</script>

<style lang="scss">
  .navbar-form{
    .input{
      width: 150px;
      transition: all .8s ease;
      transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    }
    .input.active{
      width: 200px;
    }
  }
  nav li>a{
    font-size: 16px;
  }
  .navbar-brand{
    color: #31AAB2;
    font-weight: 600;
  }
</style>
