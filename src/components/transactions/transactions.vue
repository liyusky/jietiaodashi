<template>
  <!-- s 收支明细 -->
  <section class="transactions padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <PullRefreshComponent :direction="'bottom'" v-if="detailList.length" @LOAD_MORE_EVENT="loadMore">
      <DetailListComponent class="bg-white" :detailList="detailList" @DOUBLE_EVENT="showDetail"></DetailListComponent>
    </PullRefreshComponent>
  </section>
  <!-- e 收支明细 -->
</template>

<script>
// include dependence
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import Time from '../../class/Time.class.js'
import DetailListComponent from '../../module/detail-list/detail-list.vue'
import PullRefreshComponent from '../../module/pull-refresh/pull-refresh.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'TransactionsComponent',
  data () {
    return {
      pageCurrent: 1,
      // start params
      'detailList': [],
      'title': {
        contentText: '收支明细'
      }
      // end params
    }
  },
  components: {
    DetailListComponent,
    TitleComponent,
    PullRefreshComponent
    // include components
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      Http.send({
        url: 'TransferALL',
        data: {
          token: Storage.token,
          phone: Storage.phone,
          lastTime: '',
          pageCurrent: this.pageCurrent,
          pageSize: 20
        }
      }).success(data => {
        this.formatData(data)
      }).fail(data => {
      })
    },
    formatData (data) {
      data.Rows.forEach(item => {
        let detail = {
          type: 'double',
          title: item.tranTypeName,
          count: item.amount,
          time: Time.format('YYYY/MM/DD HH/hh/mm WW', data.transferTime),
          remnant: item.balance_new,
          icon: 'cong',
          oid: item.oid
        }
        this.detailList.push(detail)
        this.pageCurrent++
      })
    },
    showDetail (oid) {
      Storage.oid = oid
      Router.push('transfer-detail')
    },
    loadMore () {
      console.log(1)
      this.init()
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./transactions.scss";
</style>
