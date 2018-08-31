<template>
  <!-- s 账单 -->
  <section class="transactions padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <DetailListComponent class="bg-white" :detailList="detailList"></DetailListComponent>
  </section>
  <!-- e 账单 -->
</template>

<script>
// include dependence
import DetailListComponent from '../../module/detail-list/detail-list.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'TransactionsComponent',
  data () {
    return {
      // start params
      'detailList': [
        {
          type: 'total',
          time: '2012-11-11',
          pay: '11111',
          income: '22222',
          icon: 'cong'
        }, {
          type: 'double',
          title: '提现',
          count: '-3,049.00',
          time: '11-19  15:14  周三',
          remnant: '余额:0.05',
          icon: 'cong'
        }, {
          type: 'double',
          title: '提现',
          count: '-3,049.00',
          time: '11-19  15:14  周三',
          remnant: '余额:0.05',
          icon: 'cong'
        }, {
          type: 'double',
          title: '提现',
          count: '-3,049.00',
          time: '11-19  15:14  周三',
          remnant: '余额:0.05',
          icon: 'cong'
        }
      ],
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
  }
}
</script>

<style lang="sass" scoped>
@import "./transactions.scss";
</style>
