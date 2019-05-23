<template>
  <div class="comments">
      <div class="nav">
        <div>
          <i class="fa fa-chevron-left fa-inverse "  @click="back"></i>
          <span>{{total}} 条评论</span>
        </div>
          <i class="fa fa-pencil-square-o fa-inverse"></i>
        </div>
        <div class="commentsct" >
          <div class="longComments">
            <div class="commentsHead">
              <span>{{longComments.length}} 条长评</span>
              <i class="fa fa-angle-double-down arrow iconTransformStart" @click="iconChange"></i>
            </div>
            <div class="contentList">
            <div class="commentsContent" v-for="(item,index) in longComments">
                <div class="author">
                  <img class="authorImg" :src="item.avatar" alt="">
                  <span class="authorName">{{item.author}}</span>
                </div>
                <div class="favour">
                  <i class="fa fa-thumbs-up "></i>
                  <span class="favourNum">{{item.likes}}</span>
                </div>
                <div class="commentsText">
                  <span class="text">
                    {{item.content}}
                  </span>
                  <span class="time">
                    {{timeChange(item.time)}}
                  </span>
                  </div>
              </div>
              </div>
          </div>
          <div class="shortComments">
            <div class="commentsHead">
              <span>{{shortComments.length}} 条短评</span>
              <i class="fa fa-angle-double-down arrow iconTransformStart" @click="iconChange"></i>
            </div>
            <div class="contentList hide">
              <div class="commentsContent" v-for="(item,index) in shortComments">
                  <div class="author">
                    <img class="authorImg" :src="item.avatar" alt="">
                    <span class="authorName">{{item.author}}</span>
                  </div>
                  <div class="favour">
                    <i class="fa fa-thumbs-up "></i>
                    <span class="favourNum">{{item.likes}}</span>
                  </div>
                  <div class="commentsText">
                      <span class="text">
                      {{item.content}}
                      </span>
                      <span class="time">
                       {{timeChange(item.time)}}
                      </span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: "comments",
  data() {
    return {
      longComments: [],
      shortComments:[],
    };
  },
  created(){
    let longurl = "api/4/story/" + this.$route.params.NewsId+'/long-comments',
        shorturl = "api/4/story/" + this.$route.params.NewsId+'/short-comments';
    this.$axios.get(longurl)
    .then(response => {
      this.longComments =response.data.comments;
    })
    .catch(error => {
      console.log(error);
    })
    this.$axios.get(shorturl)
    .then(response =>{
       this.shortComments =response.data.comments;
    })
    .catch(error => {
      console.log(error);
    })
   
  },
  computed:{
    //获取短评论加长评论的总数
    total(){
      return this.longComments.length+this.shortComments.length;
    },
    //判断长评论为零时，显示短评论数列
    islongComments(){
       if(!this.longComments.length){
        // $('.shortComments').children[1].remove('');
      }
    }
  },
  methods: {
      back(){
        this.$router.go(-1)
      },
      Appendzero(obj) {
      //添0操作
      {
        if (obj < 10) {
          return "0" + "" + obj;
        } else {
          return obj;
        }
      }
    },
      timeChange(data){
        let Appendzero =this.Appendzero;
        let currentTime= new Date(data*1000);
        let commentsTime = (currentTime.getMonth()+1)+'-'+
        Appendzero(currentTime.getDate())+' '+
        Appendzero(currentTime.getHours())+':'+
        Appendzero(currentTime.getMinutes());
        return commentsTime;
      },
      iconChange(e){
        let that = e.target;
        let contentList = that.parentNode.parentNode.children[1];
        that.classList.toggle("iconTransformEnd");
        that.classList.toggle('iconTransformStart');
        contentList.classList.toggle("hide")
      }
  } 
};
</script>

<style scoped>
.hide{
  display: none;
}
.comments{
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
}
.nav{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top:0;
    height:50px;
    max-width: 768px;
    width:100%;
    background: rgba(0, 0, 0,0.1);
    z-index:3;
    font-size: 18px;
    color: #fff;
    padding: 0 15px 0 10px;
    box-sizing: border-box
}
.comments .commentsct{
  margin-top: 50px;
}

.commentsHead {
  width: 100%;
  display: flex;
  justify-items: center;
  justify-content: space-between;
  padding: 0 10px 0 15px;
  box-sizing: border-box;
  border: 1px solid #999999;
  border-left: 0;
  border-right: 0;
}
.longComments .commentsHead{
  border-top: 0;
}
.commentsHead span{
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.commentsHead .arrow{
  height: 40px;
  line-height: 40px;
  font-size: 18px;
}
.commentsContent{
  margin-top: 10px;
  position: relative;
  padding: 0 15px;
}
.commentsContent .favour{
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 18px;
}
.commentsContent .favour .favourNum{
font-size: 14px;
}
.commentsContent .author .authorName{
  font-size: 14px;
    font-weight: 600;
}
.commentsContent .author img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    vertical-align: middle;
    padding: 0 5px;
}
.commentsContent .commentsText .text
{
  display: block;
  width: 75%;
  margin: 0 auto ;
  font-size: 16px;
  /* text-align: center; */
}
.commentsContent .commentsText .time{
  display: block;
  width: 75%;
  margin: 0 auto ;
  padding: 15px 0;
}
.iconTransformEnd {
  transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  transition-duration: 0.5s;
  -moz-transition-duration: 0.5s; /* Firefox 4 */
  -webkit-transition-duration: 0.5s; /* Safari 和 Chrome */
  -o-transition-duration: 0.5s; /* Opera */
}
.iconTransformStart {
  transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  transition-duration: 0.5s;
  -moz-transition-duration: 0.5s; /* Firefox 4 */
  -webkit-transition-duration: 0.5s; /* Safari 和 Chrome */
  -o-transition-duration: 0.5s; /* Opera */
}
</style>
