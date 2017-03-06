<template lang="html">
  <div class="">
    <div class="c-header-navbar__menu" @click="clickSlidebar">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </div>
    <div class="sidebar-drawer-menu-overlay js-drawer-menu-overlay--hide"  @click="toggle">
      <div class="sidebar-drawer-menu sidebar-drawer-menu-show-pos">
        <header class="sidebar-drawer-menu__title menu-wrap-seprator"><a href="/">首页</a></header>
        <div class="menu-wrap">
          <ul>
            <li class="menu-wrap__item menu-wrap-seprator" @click="closeMask">
              <router-link :to="{name:'components'}">Component</router-link>
            </li>
            <li class="menu-wrap__item menu-wrap-seprator" @click="closeMask">
              <router-link :to="{name:'echarts'}">Echarts</router-link>
            </li>
            <li class="menu-wrap__item menu-wrap-seprator" @click="closeMask">
              <router-link :to="{name:'Hello'}">Hello</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    methods : {
      clickSlidebar : function(){
        if($('.sidebar-drawer-menu-overlay').hasClass('js-drawer-menu-overlay--hide')){
          $('.sidebar-drawer-menu-overlay').removeClass('js-drawer-menu-overlay--hide').addClass('js-drawer-menu-overlay--show');
        }else{
          $('.sidebar-drawer-menu-overlay').removeClass('js-drawer-menu-overlay--show').addClass('js-drawer-menu-overlay--hide');
        }
      },
      toggle : function(event){
        //console.log(event.target)
        $(event.target).removeClass('js-drawer-menu-overlay--show').addClass('js-drawer-menu-overlay--hide');
      },
      closeMask : function(){
          $('.sidebar-drawer-menu-overlay').addClass('js-drawer-menu-overlay--hide');
      }
    }
  }
</script>

<style lang="scss">
  .sidebar-drawer-menu-overlay {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 9998;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.5);

      .sidebar-drawer-menu {
        position: absolute;
        z-index: 9999;
        left: 0;
        top: 0;
        width: 250px;
        height: 100%;
        background: #fff;
        opacity: 1;
        .menu-wrap-seprator {
            border-bottom: 1px solid #ededed;
        }
        .sidebar-drawer-menu__title {
            height: 60px;
            line-height: 60px;
            vertical-align: middle;
            font-weight: 900;
            font-size: 1.6rem;
            // padding-left: 20px;
            a{
              color: #999;
            }
        }
        .menu-wrap {
            height: 100%;
            overflow: scroll;
            padding-bottom: 100px;
            ul{
              list-style-type: none;
              margin: 0;
              padding: 0;
              font-weight: 900;
              li{
                float: none;
              }
              li:hover{
                a{
                  color: #0099e5;
                }

              }
              a{
                width: 100%;
                text-decoration: none;
                cursor: pointer;
                display: inline-block;
                height: 44px;
                color: #333;
                font-size: 1.4rem;
                line-height: 44px;
                vertical-align: middle;
                // padding-left: 20px;
              }

            }
        }

      }

  }
  .c-header-navbar__menu{
    // display: none;
    position: absolute;
    left: 20px;
    top: 10px;
    width: 30px;
    height: 40px;
    padding: 10px 5px;
    // line-height: 60px;
    cursor: pointer;
    // border: 1px solid #ccc;
    // border-radius: 4px;
    z-index: 9997;
    span{
      display: block;
      border: 1px solid #666;
      margin-bottom: 5px;
    }
  }


  .js-drawer-menu-overlay--show {
      display: block;
      -webkit-animation: fadeOverlay 1s linear;
      animation: fadeOverlay 1s linear;
  }
  .js-drawer-menu-overlay--hide {
      display: none;
  }
  @media (max-width: 768px){
    .c-header-navbar__menu{
      display: block;
    }
    nav{
      display: none;
    }
    .container{
      padding: 0;
    }
    .hidden-xs{
      display: none;
    }
  }

</style>
