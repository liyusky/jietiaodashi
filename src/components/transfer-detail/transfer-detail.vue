<template>
  <!-- s 收支明细详情 -->
  <section class="transfer-detail padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <div class="detail-card bg-white">
      <div class="color-green font-72">{{amount}}</div>
      <div class="color-light-grey font-30">{{state}}</div>
    </div>
    <DetailListComponent class="detail-list font-30 margin-top-21 padding-horizontal-30 bg-white" :detailList="detailList"></DetailListComponent>
  </section>
  <!-- e 收支明细详情 -->
</template>

<script>
// include dependence
import Http from '../../class/undefined'
import Storage from '../../class/Storage.class.js'
import DetailListComponent from '../../module/detail-list/detail-list.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'TransferDetailComponent',
  data () {
    return {
      amount: '',
      state: '',
      // start params
      'detailList': [
        {
          type: 'default',
          key: '类型',
          value: '收回'
        },
        {
          type: 'default',
          key: '时间',
          value: '2017-12-31 12:25:55 周三'
        },
        {
          type: 'default',
          key: '说明',
          value: '收到周明明的还款'
        },
        {
          type: 'default',
          key: '余额',
          value: '1500.00'
        },
        {
          type: 'default',
          key: '其他',
          value: '无'
        }
      ],
      'title': {
        contentText: '收支明细详情'
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
          id: Storage.oid
        }
      }).success(data => {
        this.formatData(data)
      }).fail(data => {
      })
    },
    formatData (data) {
      this.detailList[0].value = data.tranTypeName
      this.detailList[1].value = data.transferTime
      this.detailList[2].value = data.remark
      this.detailList[3].value = data.balance
      this.detailList[4].value = data.transferName
      this.amount = data.amount
      this.state = data.resp_desc
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./transfer-detail.scss";
</style>
