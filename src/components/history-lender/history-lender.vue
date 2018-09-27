<template>
  <!-- s 历史出借人 -->
  <section class="history-lender padding-top-126">
    <TitleComponent :title="title" @OTHER_EVENT="confirm"></TitleComponent>
    <PullRefreshComponent  :direction="'bottom'" v-if="loaners.length" @LOAD_MORE_EVENT="loadMore">
      <div class="lender-item bg-white border-bottom-1" v-for="(item, index) in loaners" :key="index" @click="selected(item, index)">
        <div class="item-portrait">
          <img src="../../assets/images/master.png">
        </div>
        <div class="item-detail padding-horizontal-30">
          <div class="detail-title">
            <!-- <p class="font-33 color-black">{{item.Name}}</p> -->
            <p class="font-27 color-deep-grey"><span>借条ID：</span><span>{{item.accid}}</span></p>
          </div>
          <i class="iconfont icon-gouxuan color-light-grey font-30" :class="{'icon-jindu color-blue': item.checkFriend}"></i>
        </div>
      </div>
    </PullRefreshComponent>
  </section>
  <!-- e 历史出借人 -->
</template>

<script>
// include dependence
import Http from '../../class/Http.class.js'
import Storage from '../../class/Storage.class.js'
import PullRefreshComponent from '../../module/pull-refresh/pull-refresh.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'HistoryLenderComponent',
  data () {
    return {
      loaners: [],
      // start params
      'title': {
        contentText: '历史出借人',
        rightText: '确认'
      }
      // end params
    }
  },
  components: {
    PullRefreshComponent,
    TitleComponent
    // include components
  },
  created () {
    this.init()
    Storage.publishObject = null
  },
  methods: {
    init () {
      Http.send({
        url: 'HistoryLendMemberList',
        data: {
          token: Storage.token,
          phone: Storage.phone
        }
      }).success(data => {
        console.log(data)
        this.formatData(data)
      }).fail(data => {
      })
    },
    formatData (data) {
      data.forEach((ele) => {
        ele.checkFriend = false
        this.loaners.push(ele)
      })
    },
    confirm () {
      var selectObject = []
      this.loaners.forEach(ele => {
        if (ele.checkFriend) {
          selectObject.push(ele)
        }
      })
      Storage.publishObject = selectObject
      // Router.push('wanna-borrow')
    },
    loadMore () {
      this.init()
    },
    selected (item, index) {
      this.loaners[index].checkFriend = !this.loaners[index].checkFriend
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./history-lender.scss";
</style>
