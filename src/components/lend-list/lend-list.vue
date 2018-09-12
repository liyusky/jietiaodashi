<template>
  <!-- s 借出 -->
  <section class="lend-list padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <NavComponent class="list-nav font-30 bg-white" :nav="nav" @SELECTED_EVENT="toggleType"></NavComponent>
    <BoardComponent class="list-board color-white padding-left-30">
      <div class="board-tip font-27">
        <p class="margin-right-15">当前金额（元）</p>
        <i class="iconfont icon-chuyin font-39"></i>
      </div>
      <div class="font-72">{{TotalAmount}}</div>
      <div class="font-27">应付利息 {{TotalInterest}}元</div>
      <ImageBgComponent :imageBg="imageBg"></ImageBgComponent>
    </BoardComponent>
    <ReceiptComponent :receipt="item" v-for="(item, index) in receipt" :key="index"></ReceiptComponent>
  </section>
  <!-- e 借出 -->
</template>

<script>
// include dependence
import Http from '../../class/Http.class.js'
import Status from '../../class/Status.enum.js'
import Storage from '../../class/Storage.class.js'
import Type from '../../class/Type.enum.js'
import BoardComponent from '../../module/board/board.vue'
import ImageBgComponent from '../../module/image-bg/image-bg.vue'
import NavComponent from '../../module/nav/nav.vue'
import ReceiptComponent from '../../module/receipt/receipt.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'LendListComponent',
  data () {
    return {
      TotalAmount: 0,
      TotalInterest: 0,
      type: 1,
      pageIndex: 1,
      // start params
      'imageBg': 'https://api.vtrois.com/image/750x300/ff8d7b',
      'nav': {
        content: ['当前', '已放款', '已逾期', '已还清', '已失效'],
        active: ''
      },
      'receipt': [],
      'title': {
        contentText: '借出'
      }
      // end params
    }
  },
  components: {
    BoardComponent,
    ImageBgComponent,
    NavComponent,
    ReceiptComponent,
    TitleComponent
    // include components
  },
  methods: {
    
    init () {
      Http.send({
        url: 'LendList',
        data: {
          token: Storage.token,
          userPhone: Storage.phone,
          type: this.type,
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
      this.TotalAmount = data.TotalAmount
      this.TotalInterest = data.TotalInterest
      this.receipt = []
      data.Rows.forEach(item => {
        let receipt = {
          name: item.TargetName,
          type: Type[item.Type],
          portrait: 'https://api.vtrois.com/image/81/fff7db/e62991',
          rate: item.YearRate,
          start: item.LoanDate,
          end: item.RepaymentDate,
          money: item.Amount,
          status: Status[item.State]
        }
        this.receipt.push(receipt)
      })
    },
    toggleType (index) {
      this.type = ++index
      console.log(this.type)
      this.pageIndex = 1
      this.init()
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./lend-list.scss";
</style>
