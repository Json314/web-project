<template lang="html">
  <div class="home">
    <div class="row carousel-box">
      <div class="col-sm-6">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            <li data-target="#carousel-example-generic" data-slide-to="3"></li>
          </ol>

          <!-- Wrapper for slides -->
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <img src="../assets/carousel_1.jpg" alt="...">
              <div class="carousel-caption">
                carousel_1
              </div>
            </div>
            <div class="item">
              <img src="../assets/carousel_2.jpg" alt="...">
              <div class="carousel-caption">
                carousel_2
              </div>
            </div>
            <div class="item">
              <img src="../assets/carousel_3.jpg" alt="...">
              <div class="carousel-caption">
                carousel_3
              </div>
            </div>
            <div class="item">
              <img src="../assets/carousel_4.jpg" alt="...">
              <div class="carousel-caption">
                carousel_4
              </div>
            </div>
            <!-- ... -->
          </div>

          <!-- Controls -->
          <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div class="col-sm-3">
        <div class="box">
          <h1>home <i class="glyphicon glyphicon-chevron-right pull-right"></i></h1>
          <div class="img">
            <img src="../assets/carousel_1.jpg" alt="" />
          </div>
          <div class="title">抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德！</div>
          <div class="title">抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德！</div>
          <div class="title">抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德！</div>
          <div class="title">抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德！</div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="box">
          <h1>home <i class="glyphicon glyphicon-chevron-right pull-right"></i></h1>
          <div class="img">
            <img src="../assets/carousel_1.jpg" alt="" />
          </div>
          <div class="title">抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德！</div>
          <div class="title">抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德！</div>
          <div class="title">抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德！</div>
          <div class="title">抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德.抵制乐天，坚决反对韩方部署萨德！</div>
        </div>
      </div>
    </div>
    <div id="navBox" class="navBox clearfix" v-scroll>
      <ul>
        <li class="current">
          <a href="javascript:void(0)">Hot</a>
        </li>
        <li >
          <a href="javascript:void(0)">美食</a>
        </li>
        <li >
          <a href="javascript:void(0)">风景</a>
        </li>
        <li >
          <a href="javascript:void(0)">航拍</a>
        </li>
        <li >
          <a href="javascript:void(0)">美女</a>
        </li>
        <li >
          <a href="javascript:void(0)">周边</a>
        </li>
        <li >
          <a href="javascript:void(0)">众筹</a>
        </li>
        <li >
          <a href="javascript:void(0)">公益</a>
        </li>
      </ul>
      <div class="focus"></div>
  </div>
  <div class="list-container" id="list">
    <div class="enterblock">
      <a href="#">
        <div class="mask"></div>
        <span class="label yellowBg">风景</span>
        <img src="../assets/carousel_4.jpg" alt="风景" />
        <div class="drift">
          <span class="title">风景如画</span>
          <hr style="margin-top:5px;margin-bottom:5px;">
          <div class="abs">2017春天来得晚了一些，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画</div>
        </div>
      </a>
    </div>
    <div class="enterblock">
      <a href="#">
        <div class="mask"></div>
        <span class="label yellowBg">风景</span>
        <img src="../assets/carousel_3.jpg" alt="风景" />
        <div class="drift">
          <span class="title">风景如画</span>
          <hr style="margin-top:5px;margin-bottom:5px;">
          <div class="abs">2017春天来得晚了一些，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画</div>
        </div>
      </a>
    </div>
    <div class="enterblock">
      <a href="#">
        <div class="mask"></div>
        <span class="label yellowBg">风景</span>
        <img src="../assets/carousel_2.jpg" alt="风景" />
        <div class="drift">
          <span class="title">风景如画</span>
          <hr style="margin-top:5px;margin-bottom:5px;">
          <div class="abs">2017春天来得晚了一些，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画</div>
        </div>
      </a>
    </div>
    <div class="enterblock">
      <a href="#">
        <div class="mask"></div>
        <span class="label yellowBg">风景</span>
        <img src="../assets/carousel_4.jpg" alt="风景" />
        <div class="drift">
          <span class="title">风景如画</span>
          <hr style="margin-top:5px;margin-bottom:5px;">
          <div class="abs">2017春天来得晚了一些，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画</div>
        </div>
      </a>
    </div>
    <div class="enterblock">
      <a href="#">
        <div class="mask"></div>
        <span class="label yellowBg">风景</span>
        <img src="../assets/carousel_1.jpg" alt="风景" />
        <div class="drift">
          <span class="title">风景如画</span>
          <hr style="margin-top:5px;margin-bottom:5px;">
          <div class="abs">2017春天来得晚了一些，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画</div>
        </div>
      </a>
    </div>
    <div class="enterblock">
      <a href="#">
        <div class="mask"></div>
        <span class="label yellowBg">风景</span>
        <img src="../assets/carousel_4.jpg" alt="风景" />
        <div class="drift">
          <span class="title">风景如画</span>
          <hr style="margin-top:5px;margin-bottom:5px;">
          <div class="abs">2017春天来得晚了一些，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画</div>
        </div>
      </a>
    </div>
    <div class="enterblock">
      <a href="#">
        <div class="mask"></div>
        <span class="label yellowBg">风景</span>
        <img src="../assets/carousel_3.jpg" alt="风景" />
        <div class="drift">
          <span class="title">风景如画</span>
          <hr style="margin-top:5px;margin-bottom:5px;">
          <div class="abs">2017春天来得晚了一些，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画</div>
        </div>
      </a>
    </div>
    <div class="enterblock">
      <a href="#">
        <div class="mask"></div>
        <span class="label yellowBg">风景</span>
        <img src="../assets/carousel_2.jpg" alt="风景" />
        <div class="drift">
          <span class="title">风景如画</span>
          <hr style="margin-top:5px;margin-bottom:5px;">
          <div class="abs">2017春天来得晚了一些，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画</div>
        </div>
      </a>
    </div>
    <div class="enterblock">
      <a href="#">
        <div class="mask"></div>
        <span class="label yellowBg">风景</span>
        <img src="../assets/carousel_3.jpg" alt="风景" />
        <div class="drift">
          <span class="title">风景如画</span>
          <hr style="margin-top:5px;margin-bottom:5px;">
          <div class="abs">2017春天来得晚了一些，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画</div>
        </div>
      </a>
    </div>
    <div class="enterblock">
      <a href="#">
        <div class="mask"></div>
        <span class="label yellowBg">风景</span>
        <img src="../assets/carousel_2.jpg" alt="风景" />
        <div class="drift">
          <span class="title">风景如画</span>
          <hr style="margin-top:5px;margin-bottom:5px;">
          <div class="abs">2017春天来得晚了一些，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画</div>
        </div>
      </a>
    </div>
    <div class="enterblock">
      <a href="#">
        <div class="mask"></div>
        <span class="label yellowBg">风景</span>
        <img src="../assets/carousel_1.jpg" alt="风景" />
        <div class="drift">
          <span class="title">风景如画</span>
          <hr style="margin-top:5px;margin-bottom:5px;">
          <div class="abs">2017春天来得晚了一些，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画</div>
        </div>
      </a>
    </div>
    <div class="enterblock">
      <a href="#">
        <div class="mask"></div>
        <span class="label yellowBg">风景</span>
        <img src="../assets/carousel_4.jpg" alt="风景" />
        <div class="drift">
          <span class="title">风景如画</span>
          <hr style="margin-top:5px;margin-bottom:5px;">
          <div class="abs">2017春天来得晚了一些，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画，风景如画</div>
        </div>
      </a>
    </div>
  </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  Vue.directive('scroll', {
    inserted : function(el,binding,vnode){
      $(el).scrollNav();
    }
  });

  export default {
    name : 'home'
  }
</script>

<style lang="scss" scope>
  $hoverColor: #31AAB2;
  #carousel-example-generic{
    .item img{
      width: 100%;
      height: 500px;
    }
  }
  .carousel-box{
    margin: 0 -7px;
  }
  .carousel-box>div{
    padding-left: 7px;
    padding-right: 7px;
    >div{
      height: 500px;
      overflow: hidden;
    }
  }
  .box{
    background-color: #3c3b4b;
    padding: 15px 0;

    h1{
      margin: 0;
      padding: 0 15px;
      color: #fff;
      font-size: 30px;
      text-align: left;
      margin-bottom: 15px;
      cursor: pointer;
      i{
        font-size: 22px;
        top: 6px;
      }
      .line{
        border-top: 1px solid #fff;
      }
    }
    .img{
      height: 194px;
      overflow: hidden;
      img{
        width: 100%;
        height: 194px;
        cursor: pointer;
        transition: all .5s ease;
        transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
      }
      img:hover{
        transform: scale(1.2);
      }
    }
    .title{
      // height: 40px;
      color: #fff;
      font-size: 14px;
      height: 60px;
      cursor: pointer;
      line-height: 36px;
      padding: 14px 15px 10px;
      overflow: hidden;
      border-top: 1px solid rgba(255,255,255,.07);
    }
    .title:hover{
      color: $hoverColor;
      background-color: rgba(0,0,0,.06);
    }
  }


  // nav滑动效果样式
  .navBox {
     display: inline-block;
     margin-top: 15px;
     font-size: 16px;
     width: 100%;
     height: 52px;
     overflow: hidden;
     position: relative;
     _float:left; *float:left;
   }

  .navBox ul {
    padding: 0;
    width:100%;
    height: 100%;
    position: absolute;
    top: 5px;
    left: 0;
    z-index: 2;
  }

  .navBox ul li {
    display: inline;
    float: left;
    height: 42px;
    width: 83px;
    overflow: hidden;margin: 0;
  }

  .navBox ul li a {
    float:left;
    color: #666;
    height: 100%;
    width: 100%;
    padding: 0;
    text-align: center;
    text-decoration:none;
  }

  .navBox ul li a:hover,.navBox ul li.current a{
    color: $hoverColor;
  }

  .navBox .focus{
    border-bottom:solid 2px $hoverColor;
    height:48px;
    width: 85px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    -webkit-transition:all cubic-bezier(.2,.2,.45,1.5) .44s;
    -moz-transition:all cubic-bezier(.2,.2,.45,1.5) .44s;
    -ms-transition:all cubic-bezier(.2,.2,.45,1.5) .44s;
    transition:all cubic-bezier(.2,.2,.45,1.5) .44s;
  }

  //list部分
  .list-container{
    margin: 0 -5px;
    overflow: hidden;
  }
  .enterblock{
    float:left;
    margin: 5px;
    position: relative;
    overflow: hidden;
  }

  .enterblock a{
    display: block;
    height: 100%;
    width:100%;
    position: relative;
    .label{
      color:#fff;
      padding: 0 8px;
      line-height: 20px;
      border-radius: 3px;
      height:20px;
      position: absolute;
      top:16px;
      left: 16px;
      z-index: 999;
    }
    .mask{
      filter: alpha(opacity=20);
      position: absolute;
      left: 0;
      top:0;
      bottom: 0;
      right: 0;
      transition: all 0.3s linear;
      background-color: rgba(0,0,0,.2);
      opacity: .2;
    }
    .drift{
      width: 90%;
      max-width: 449px;
      position: absolute;
      left: 5%;
      top: 64%;
      z-index: 999;
      transition: all 0.3s linear;
      transition-timing-function: cubic-bezier(.25, .1, .25, 1);
      .abs{
        color: #ddd;
        text-shadow: 0 1px 0 rgba(0,0,0,.3);
        word-wrap: break-word;
        text-align: left;
      }
    }
  }

  .enterblock a::before{
    width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      background-color: rgba(0,0,0,0);
      background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(#000));
      background: -ms-linear-gradient(top, rgba(0,0,0,0), #000);
      opacity: 0.7;
      content: " ";
  }

  .enterblock a:hover{
    text-decoration: none;
    .mask{
      opacity: 1;
    }
    .drift{
      top: 20%;
    }
  }


  .yellowBg{
    background: $hoverColor;
  }

  .enterblock img{
    height:100%;
    width: 248px;
    overflow: hidden;
  }

  .drift .title{
    display: inline-block;
    color: #fff;
    font-size: 18px;
    padding: 5px 0;
    height:auto;
    word-break: break-all;
    word-wrap: break-word;
    -webkit-text-shadow:0 2px 4px rgba(0,0,0,.75);
    -ms-text-shadow:0 2px 4px rgba(0,0,0,.75);
    -moz-text-shadow:0 2px 4px rgba(0,0,0,.75);
    text-shadow: 0 2px 4px rgba(0,0,0,.75);
  }

</style>
