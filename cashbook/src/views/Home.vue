<template>
  <div class="home">
    <div id="nav">
      <van-tabs
        v-model="active"
        type="card"
        boder
        color="#ffffff"
        background="#5B5E63"
        title-active-color="#000000"
        title-inactive-color="#ffffff"
      >
        <van-tab title="明细">
          <bookList :bookLists="bookLists"></bookList>
        </van-tab>
        <van-tab title="类别报表"></van-tab>
        <!-- <van-tab title="明细" :to="{name: 'home'}"></van-tab>
        <van-tab title="类别报表" :to="{name: 'about'}"></van-tab>-->
        <van-tab title></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import bookList from "@/components/bookList.vue";

export default {
  name: "home",
  data() {
    return {
      active: '1',
    }
  },
  created() {
    this.bookLists = {
      header: ["支出(元)", "收入(元)"],
      data: [
        {
          id: 1,
          name: "余额宝",
          time: "2020-01-30 14:21:20",
          money: 8432.64,
          iconNum: 6
        },
        {
          id: 14,
          name: "余额宝",
          time: "2020-01-31 14:30:20",
          money: -2558.12,
          iconNum: 8
        },
        {
          id: 4,
          name: "余额宝",
          time: "2020-01-29 14:24:20",
          money: 1222.48,
          iconNum: 7
        },
        {
          id: 15,
          name: "余额宝",
          time: "2020-01-31 13:22:20",
          money: -697.98,
          iconNum: 5
        },
        {
          id: 5,
          name: "余额宝",
          time: "2020-01-30 10:20:22",
          money: 2958.55,
          iconNum: 1
        },
        {
          id: 18,
          name: "余额宝",
          time: "2020-01-29 08:20:21",
          money: -3449.04,
          iconNum: 5
        },
        {
          id: 7,
          name: "余额宝",
          time: "2020-01-31 09:20:21",
          money: 8166.05,
          iconNum: 2
        },
        {
          id: 19,
          name: "余额宝",
          time: "2020-01-30 13:22:20",
          money: 9212.26,
          iconNum: 5
        },
        {
          id: 10,
          name: "余额宝",
          time: "2020-01-29 5:24:20",
          money: 4839.26,
          iconNum: 4
        },
        {
          id: 22,
          name: "余额宝",
          time: "2020-01-31 13:22:20",
          money: 2723.04,
          iconNum: 3
        },
        {
          id: 11,
          name: "余额宝",
          time: "2020-01-30 23:24:20",
          money: 8348.58,
          iconNum: 4
        },
        {
          id: 12,
          name: "余额宝",
          time: "2020-01-29 13:22:20",
          money: 6718.55,
          iconNum: 1
        },
        {
          id: 23,
          name: "余额宝",
          time: "2020-01-31 20:24:20",
          money: -1601.18,
          iconNum: 3
        },
        {
          id: 24,
          name: "余额宝",
          time: "2020-01-30 13:22:20",
          money: 7546.81,
          iconNum: 2
        },
        {
          id: 14,
          name: "余额宝",
          time: "2020-01-29 15:24:20",
          money: -2552.55,
          iconNum: 5
        },
        {
          id: 21,
          name: "余额宝",
          time: "2020-01-30 13:22:20",
          money: 2958.55,
          iconNum: 1
        },
        {
          id: 9,
          name: "余额宝",
          time: "2020-02-29 16:24:20",
          money: -3449.04,
          iconNum: 5
        },
        {
          id: 20,
          name: "余额宝",
          time: "2020-02-31 13:22:20",
          money: 8166.05,
          iconNum: 2
        },
        {
          id: 8,
          name: "余额宝",
          time: "2020-02-30 14:23:20",
          money: 9212.26,
          iconNum: 5
        },
        {
          id: 17,
          name: "余额宝",
          time: "2020-02-29 13:24:30",
          money: 4839.26,
          iconNum: 4
        },
        {
          id: 6,
          name: "余额宝",
          time: "2020-02-31 13:25:24",
          money: 2723.04,
          iconNum: 3
        },
        {
          id: 16,
          name: "余额宝",
          time: "2020-02-30 18:24:20",
          money: 8348.58,
          iconNum: 4
        },
        {
          id: 3,
          name: "余额宝",
          time: "2020-02-29 13:22:27",
          money: 6718.55,
          iconNum: 1
        },
        {
          id: 13,
          name: "余额宝",
          time: "2020-02-31 13:22:21",
          money: -1601.18,
          iconNum: 3
        },
        {
          id: 2,
          name: "余额宝",
          time: "2020-02-30 13:22:20",
          money: 7546.81,
          iconNum: 2
        }
      ]
    };
    this.genreists = {
      header: ["结余(元)", "相比上月支出"],
      data: [
        {
          id: 1,
          name: "余额宝",
          time: "2020-01-30 14:21:20",
          money: 8432.64,
          iconNum: 6
        },
        {
          id: 14,
          name: "余额宝",
          time: "2020-01-31 14:30:20",
          money: -2558.12,
          iconNum: 8
        },
        {
          id: 4,
          name: "余额宝",
          time: "2020-01-29 14:24:20",
          money: 1222.48,
          iconNum: 7
        },
        {
          id: 15,
          name: "余额宝",
          time: "2020-01-31 13:22:20",
          money: -697.98,
          iconNum: 5
        },
        {
          id: 5,
          name: "余额宝",
          time: "2020-01-30 10:20:22",
          money: 2958.55,
          iconNum: 1
        },
        {
          id: 18,
          name: "余额宝",
          time: "2020-01-29 08:20:21",
          money: -3449.04,
          iconNum: 5
        },
        {
          id: 7,
          name: "余额宝",
          time: "2020-01-31 09:20:21",
          money: 8166.05,
          iconNum: 2
        },
        {
          id: 19,
          name: "余额宝",
          time: "2020-01-30 13:22:20",
          money: 9212.26,
          iconNum: 5
        },
        {
          id: 10,
          name: "余额宝",
          time: "2020-01-29 5:24:20",
          money: 4839.26,
          iconNum: 4
        },
        {
          id: 22,
          name: "余额宝",
          time: "2020-01-31 13:22:20",
          money: 2723.04,
          iconNum: 3
        },
        {
          id: 11,
          name: "余额宝",
          time: "2020-01-30 23:24:20",
          money: 8348.58,
          iconNum: 4
        },
        {
          id: 12,
          name: "余额宝",
          time: "2020-01-29 13:22:20",
          money: 6718.55,
          iconNum: 1
        },
        {
          id: 23,
          name: "余额宝",
          time: "2020-01-31 20:24:20",
          money: -1601.18,
          iconNum: 3
        },
        {
          id: 24,
          name: "余额宝",
          time: "2020-01-30 13:22:20",
          money: 7546.81,
          iconNum: 2
        },
        {
          id: 14,
          name: "余额宝",
          time: "2020-01-29 15:24:20",
          money: -2552.55,
          iconNum: 5
        },
        {
          id: 21,
          name: "余额宝",
          time: "2020-01-30 13:22:20",
          money: 2958.55,
          iconNum: 1
        },
        {
          id: 9,
          name: "余额宝",
          time: "2020-02-29 16:24:20",
          money: -3449.04,
          iconNum: 5
        },
        {
          id: 20,
          name: "余额宝",
          time: "2020-02-31 13:22:20",
          money: 8166.05,
          iconNum: 2
        },
        {
          id: 8,
          name: "余额宝",
          time: "2020-02-30 14:23:20",
          money: 9212.26,
          iconNum: 5
        },
        {
          id: 17,
          name: "余额宝",
          time: "2020-02-29 13:24:30",
          money: 4839.26,
          iconNum: 4
        },
        {
          id: 6,
          name: "余额宝",
          time: "2020-02-31 13:25:24",
          money: 2723.04,
          iconNum: 3
        },
        {
          id: 16,
          name: "余额宝",
          time: "2020-02-30 18:24:20",
          money: 8348.58,
          iconNum: 4
        },
        {
          id: 3,
          name: "余额宝",
          time: "2020-02-29 13:22:27",
          money: 6718.55,
          iconNum: 1
        },
        {
          id: 13,
          name: "余额宝",
          time: "2020-02-31 13:22:21",
          money: -1601.18,
          iconNum: 3
        },
        {
          id: 2,
          name: "余额宝",
          time: "2020-02-30 13:22:20",
          money: 7546.81,
          iconNum: 2
        }
      ]
    };
    // this.$axios
    //   .get("https://easy-mock.com/mock/5e33d958efe660215074f675/cash/bookLists")
    //   .then(response => {
    //     // this.list = response.data.data.course_list;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  },
  methods: {
  },
  components: {
    bookList
  }
};
</script>
