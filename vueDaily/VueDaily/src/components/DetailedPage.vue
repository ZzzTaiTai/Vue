<template>
  <div class="NewsDetails">
      <div class="nav">
            <i class="fa fa-chevron-left fa-inverse " @click="back()"></i>
        </div>
        <div class="content-wrapper" >
          <div class="img-wrapper">
            <img class="banner" :src="NewsDetails.image" alt="">
            <span class="title">{{NewsDetails.title}}</span>
            <span class="image-source">{{NewsDetails.image_source}}</span>
        </div> 
        <div v-html="NewsDetails.body"></div>
          <!--  <div class="answer">
                <img src="http://pic2.zhimg.com/19ed62ad9_is.jpg" alt="">
                <span class="author">王赟 Maigo，</span>
                <span class="bio">30代も輝き続けたい</span>
            </div>
            <div class="content" v-html="NewsDetails.body">
            </div> -->
        </div>
  </div>
</template>
<script>
export default {
  name: "NewsDetails",
//   props: ["NewsDetails"],
  data() {
    return {
      NewsDetails: [],
    //   NewsId:this.$route.params.NewsId,
    };
  },
  watch: {
    NewsDetails(val) {
      this.NewsDetails = val;
    }
  },
  beforeCreate() {
        this.$nextTick(function() {
            let url = "api/4/news/" + this.$route.params.NewsId;
            this.$axios.get(url)
            .then(response => {
            this.NewsDetails = response.data;
            let link = document.createElement('link')
            link.type = 'text/css'
            link.rel = 'stylesheet'
            link.href = this.NewsDetails.css
            document.head.appendChild(link)
            })
            .catch(error =>{
                console.log(error);
            });
        })
  },
    mounted() {
       
    },
  methods: {
      back(){
          this.$router.go(-1)
      }
  }
};
</script>

<style scoped>
.NewsDetails{
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    background: hsla(0,0%,94%,.8);
}
.nav{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    position: fixed;
    top:0;
    height:50px;
    max-width: 768px;
    width:100%;
    background: rgba(0, 0, 0,0.1);
    z-index:3;
}
.nav i.fa{
    margin-left:15px;
}
.content-wrapper .img-wrapper {
    position: relative;
    z-index: 1;
}
.content-wrapper .img-wrapper .banner{
    height:280px;
    width:100%;
}
.content-wrapper .img-wrapper .title{
    position: absolute;
    bottom:40px;
    left:5px;
    padding:0 10px;
    font-size:20px;
    color:#fff;
    text-align: left;
}
.content-wrapper .img-wrapper .image-source{
    position: absolute;
    bottom:10px;
    right:10px;
    font-size:16px;
    color:rgb(212, 211, 211);
}



</style>
