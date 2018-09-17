<template>
  <!-- s 借条中心 -->
  <section class="iou-center padding-top-126">
    <TitleComponent :title="title" @OTHER_EVENT="sortIouList"></TitleComponent>
    <div class="center-search padding-horizontal-30 font-27">
      <div class="search-content" v-if="!searchSwitch" @click="search">
        <i class="iconfont icon-cong font-36 color-black"></i>
        <span>搜索姓名</span>
      </div>
      <div class="search-switch" v-if="searchSwitch">
        <div class="switch-content">
          <i class="iconfont icon-cong font-36 color-black"></i>
          <input type="text" autofocus placeholder="搜索姓名">
        </div>
        <div class="search-cancel font-27 color-blue" @click="cancelSearch"><span>取消</span></div>
      </div>
    </div>
    <NavComponent class="center-nav font-30 bg-white" :nav="nav" @SELECTED_EVENT="toggleType"></NavComponent>
    <div class="center-tab">
      <PullRefreshComponent :direction="'top'" v-if="iouList.length">
        <ReceiptComponent :receipt="item" v-for="(item, index) in iouList" :key="index" @HEADER_EVENT="chat(item)" @DETAIL_EVENT="showDetail(item.accId)"></ReceiptComponent>
      </PullRefreshComponent>
      <WithoutComponent  v-if="!iouList.length"></WithoutComponent>
    </div>
  </section>
  <!-- e 借条中心 -->
</template>

<script>
// include dependence
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
import Status from '../../class/Status.enum.js'
import Storage from '../../class/Storage.class.js'
import Type from '../../class/Type.enum.js'
import NavComponent from '../../module/nav/nav.vue'
import PullRefreshComponent from '../../module/pull-refresh/pull-refresh.vue'
import ReceiptComponent from '../../module/receipt/receipt.vue'
import TitleComponent from '../../module/title/title.vue'
import WithoutComponent from '../../module/without/without.vue'
export default {
  name: 'IouCenterComponent',
  data () {
    return {
      searchSwitch: false,
      iouList: [],
      type: 1,
      pageIndex: 1,
      order: 0,
      // start params
      'nav': {
        content: ['谁欠我钱', '我欠谁钱', '待确认', '已还清', '已失效'],
        active: 'active'
      },
      'title': {
        contentText: '借条中心',
        rightText: '排序'
      }
      // end params
    }
  },
  components: {
    TitleComponent,
    ReceiptComponent,
    NavComponent,
    WithoutComponent,
    PullRefreshComponent
    // include components
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      Http.send({
        url: 'LoanCenterList',
        data: {
          token: Storage.token,
          phone: Storage.phone,
          type: this.type,
          key: Storage.name,
          order: this.order,
          pageIndex: this.pageIndex,
          pageSize: 10
        }
      }).success(data => {
        console.log(data)
        this.formatData(data)
      }).fail(data => {
      })
    },
    formatData (data) {
      this.iouList = []
      data.Rows.forEach(item => {
        let iouList = {
          name: item.TargetName,
          type: Type[item.Type],
          portrait: 'http://iph.href.lu/120x150',
          rate: item.YearRate,
          start: item.LoanDate,
          end: item.RepaymentDate,
          money: item.Amount,
          status: Status[item.State],
          targetPhone: item.TargetPhone,
          accId: item.AccId,
          mode: item.Mode,
          icon: 'cong'
        }
        this.iouList.push(iouList)
      })
    },
    toggleType (index) {
      if (this.type === index + 1) return
      this.type = ++index
      this.pageIndex = 1
      this.init()
    },
    chat (item) {
      Router.push('chat')
    },
    showDetail (id) {
      Storage.id = id
      Router.push('iou-detail')
    },
    sortIouList () {},
    search () {
      this.searchSwitch = true
    },
    cancelSearch () {
      this.searchSwitch = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./iou-center.scss";
</style>
