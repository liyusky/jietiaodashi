<template>
  <!-- s 催收进度 -->
  <section class="collection-schedule padding-top-126">
    <TitleComponent :title="title" @OTHER_EVENT="sortScheduleList"></TitleComponent>
    <NavComponent class="schedule-nav font-30 bg-white" :nav="nav" @SELECTED_EVENT="toggleType"></NavComponent>
    <div class="schedule-tab">
      <div class="tab-img">
        <img src="http://iph.href.lu/750x150">
      </div>
      <div class="tab-content">
        <div class="tab-item" v-if="scheduleList.length">
          <ReceiptComponent :receipt="item" v-for="(item, index) in scheduleList" :key="index" @HEADER_EVENT="chat(item)" @DETAIL_EVENT="showDetail(item.id)"></ReceiptComponent>
        </div>
        <WithoutComponent  v-if="!scheduleList.length"></WithoutComponent>
      </div>
    </div>
  </section>
  <!-- e 催收进度 -->
</template>

<script>
// include dependence
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
import Stata from '../../class/Stata.Collection.js'
import Storage from '../../class/Storage.class.js'
import Type from '../../class/Type.enum.js'
import NavComponent from '../../module/nav/nav.vue'
import TitleComponent from '../../module/title/title.vue'
import WithoutComponent from '../../module/without/without.vue'
export default {
  name: 'CollectionScheduleComponent',
  data () {
    return {
      scheduleList: [],
      type: 1,
      pageIndex: 1,
      order: 0,
      // start params
      'nav': {
        content: ['全部', '催收中', '已结束'],
        active: 'active'
      },
      'title': {
        contentText: '催收进度'
      }
      // end params
    }
  },
  components: {
    NavComponent,
    TitleComponent,
    WithoutComponent
    // include components
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      Http.send({
        url: 'LoanCollectionList',
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
      this.scheduleList = []
      data.Rows.forEach(item => {
        let scheduleList = {
          name: item.TargetName,
          type: Type[item.Type],
          portrait: 'http://iph.href.lu/120x150',
          rate: item.YearRate,
          start: item.LoanDate,
          end: item.RepaymentDate,
          money: item.Amount,
          status: Stata[item.CollectionState],
          targetPhone: item.TargetPhone,
          accId: item.Accid,
          mode: item.Model,
          icon: 'cong',
          id: item.Id
        }
        this.scheduleList.push(scheduleList)
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
      Router.push('collection-detail')
    },
    sortScheduleList () {}
  }
}
</script>

<style lang="sass" scoped>
@import "./collection-schedule.scss";
</style>
