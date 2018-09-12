<template>
  <!-- s 账单 -->
  <section class="transactions padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <DetailListComponent class="bg-white" :detailList="detailList" @DOUBLE_EVENT="showDetail"></DetailListComponent>
  </section>
  <!-- e 账单 -->
</template>

<script>
// include dependence
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import DetailListComponent from '../../module/detail-list/detail-list.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'TransactionsComponent',
  data () {
    return {
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
    TitleComponent
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
          pageCurrent: 1,
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
          time: item.transferTime,
          remnant: item.balance_new,
          icon: 'cong'
        }
        this.detailList.push(detail)
      })
    },
    showDetail (oid) {
      Storage.oid = oid
      Router.push('transfer-detail')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./transactions.scss";
</style>
