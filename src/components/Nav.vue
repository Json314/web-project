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
        <a class="navbar-brand" href="#">首页</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="/components">Component</a></li>
          <li><router-link :to="{name:'Hello'}">Hello</router-link></li>
        </ul>
        <form class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control input" placeholder="Search" @focusin="focusin" @focusout="focusout">
          </div>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><router-link :to="{name:'echarts'}">Echarts</router-link></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
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
      console.log(this.$store.state.echarts.timeData)
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
</style>
