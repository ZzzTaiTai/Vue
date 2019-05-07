<template>
  <div class="hello">
    <div class="header">
        <i class="icon-menu fa fa-align-left fa-inverse "></i>
        <div class="home">
            <span class="text" >首页</span>
        </div>
        <div class="more">
            <i class="icon-bell fa fa-bell fa-inverse "></i>
            <i class="icon-more fa fa-ellipsis-v fa-inverse "></i>
        </div>
    </div>
    <div class="swiper">
      <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide v-for="item in swiperlist"><img :src="item.images[0]" class="swiper-img">{{item.title}}</swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
    </div>


  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      swiperlist:[],
      swiperOption:{
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          pagination:{
            el:'.swiper-pagination'
            },
             //分页器挂载到swiper-pagination类对应的元素上
          loop: true  //开启轮播图前后循环模式
      }
    }
  },
  created(){
    var url = '/api/4/news/latest'; // 这里就是刚才的config/index.js中的/api
    let _this = this;
    // this.$axios.get(url)
    // .then(function(response) {
    //   console.log(response.data.stories);
    //   console.log(this);//这个this和_thi
    //   console.log(_this.swiperlist)
    // })
    // .catch(function(error) {
    //   console.log(error);
    // });
    this.$axios.get(url)
    .then(response => {
      this.swiperlist = response.data.stories
      console.log(this.swiperlist);
    })
    .catch(error =>{
      console.log(error);
    });

  },
  computed: {
    swiper(){
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3,1000,false)
  },
  methods:{
    getImage(url){
                console.log(url);
                // 把现在的图片连接传进来，返回一个不受限制的路径
                if(url !== undefined){
                    return url[0].replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p');
                }
            }
  
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,button,input,textarea,th,td{margin:0;padding:0}body{font-size:12px;font-style:normal;font-family:"\5FAE\8F6F\96C5\9ED1",Helvetica,sans-serif}small{font-size:12px}h1{font-size:18px}h2{font-size:16px}h3{font-size:14px}h4,h5,h6{font-size:100%}ul,ol{list-style:none}a{text-decoration:none;background-color:transparent}a:hover,a:active{outline-width:0;text-decoration:none}table{border-collapse:collapse;border-spacing:0}hr{border:0;height:1px}img{border-style:none}img:not([src]){display:none}svg:not(:root){overflow:hidden}html{-webkit-touch-callout:none;-webkit-text-size-adjust:100%}input,textarea,button,a{-webkit-tap-highlight-color:rgba(0,0,0,0)}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]),video:not([controls]){display:none;height:0}progress{vertical-align:baseline}mark{background-color:#ff0;color:#000}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}button,input,select,textarea{font-size:100%;outline:0}button,input{overflow:visible}button,select{text-transform:none}textarea{overflow:auto}button,html [type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.clear:after{display:block;height:0;content:"";clear:both}

.header{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    position: fixed;
    top:0;
    left: 0;
    height:50px;
    max-width: 768px;
    width:100%;
    background: #359dda;
    z-index: 3;
    font-size:20px;
    color:#fff;
}
.header i.icon-menu{
    width:50px;
    font-size:20px;
    text-align: center;
    flex:0 0 50px;
    /* padding:20px 0; */
}
.header .home{
    flex:1;
}
.header .more{
    display:flex;
    display:-webkit-flex;
    float: right;
    flex:0 0 100px;
}
.header i.icon-bell{
    width:50px;
    font-size:20px;
    flex:0 0 50px;
    text-align: center;
}
.header i.icon-more{
    width:50px;
    font-size:20px;
    flex:0 0 50px;
    text-align: center;
}
/* .swiper{
    overflow:hidden;
     width:100%;
     height:0;
      padding-bottom:30.48%; 
     background: #eee;
} */
.swiper-img{width:100%;}
.swiper-pagination-bullet-active{
    background:#fff
    }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
