<template>
  <div class="NewsList">
    <div class="newsItem">
      <div class="list" v-for="item in nList" id>
        <img :src="item.images[0]" alt>
        <span class="text">{{item.title}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewsList",
  props: ["NewsL"],
  data() {
    return {
      nList: [],
      scrollNum: 0
    };
  },
  watch: {
    NewsL(val) {
      this.nList = val;
      // console.log(val)
      this.scroll(this.nList);
    }
  },
  created() {
    // console.log(this.getTimes(0));
    // return;
  },
  methods: {
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
    getTimes(n) {
      //     var myDate = new Date();
      //     var startTime = () -  24 * 60 * 60 * 1000;//减去一天
      //     var startYear = new Date(startTime).getFullYear(); //获取新的日期的年份
      //     var startMonth = new Date(startTime).getMonth() + 1;//获取月份
      //     var startDay = new Date(startTime).getDate(); //获取天
      //     // console.log(startYear + this.Appendzero(startMonth) + this.Appendzero(startDay))
      //     return startYear + this.Appendzero(startMonth) + this.Appendzero(startDay) //自定义日期格式，可以用字符串拼接成想要的
      let date = new Date();
      let date2 = date.setDate(date.getDate() - n);
      let ajaxDate =
        date.getFullYear() +
        this.Appendzero(date.getMonth() + 1) +
        this.Appendzero(date.getDate());
      return ajaxDate;
    },
    scroll(nList) {
      let isLoading = false;
      //   let isScroll = 0;
      window.onscroll = () => {
        let bottomWindow =
          document.documentElement.offsetHeight -
            document.documentElement.scrollTop -
            window.innerHeight <=
          10;
        if (bottomWindow && isLoading == false) {
          isLoading = true;
          ++this.scrollNum;
          this.getNews(this.getTimes(this.scrollNum));
        }
      };
    },
    getNews(date) {
      var url = "/api/4/news/before/" + date;
      this.$axios
        .get(url)
        .then(response => {
          for (let i = 0; i < response.data.stories.length; i++) {
            this.nList.push(response.data.stories[i]);
          }
          console.log(this.nList);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {}
};
</script>

<style scoped>
.newsItem .list {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  position: relative;
  top: -20px;
  margin: 0 auto;
  width: 90%;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 1px #aaaaaa;
  z-index: 2;
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 5px;
}
.newsItem .list img {
  width: 70px;
  height: 60px;
}
.newsItem .list span.text {
  font-size: 14px;
  margin-left: 15px;
}
</style>
