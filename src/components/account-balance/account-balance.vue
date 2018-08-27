<template>
  <!-- s 账单明细 -->
  <section class="account-balance">
    <TitleComponent :title="title"></TitleComponent>
    <div class="balance-card bg-write">
      <img class="card-portrait border-circle" src="https://api.vtrois.com/image/141/fff7db/e62991">
      <div class="color-black font-27">可用余额(元)</div>
      <div class="color-deep-black">
        <span class="font-51">¥</span>
        <span class="font-69">{{0}}</span>
      </div>
      <div class="color-deep-blue font-27">不可用余额 {{0}}元</div>
    </div>
    <ButtonComponent class="balance-btn padding-horizontal-30 bg-write" :button="button"></ButtonComponent>
    <DetailListComponent class="bg-write margin-top-30" :detailList="detailList"></DetailListComponent>
  </section>
  <!-- e 账单明细 -->
</template>

<script>
// include dependence
import ButtonComponent from '../../module/button/button.vue'
import DetailListComponent from '../../module/detail-list/detail-list.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'AccountBalanceComponent',
  data () {
    return {
      // start params
      'button': {
        group: [
          {
            text: '提现',
            class: 'primary'
          },
          {
            text: '充值',
            class: 'default'
          }
        ]
      },
      'detailList': [
        {
          type: 'title',
          content: '本月收支明细'
        },
        {
          type: 'double',
          title: '提现',
          count: '-3,049.00',
          time: '11-19  15:14  周三',
          remnant: '余额:0.05'
        },
        {
          type: 'double',
          title: '提现',
          count: '-3,049.00',
          time: '11-19  15:14  周三',
          remnant: '余额:0.05'
        }
      ],
      'title': {
        contentText: '账户余额',
        rightText: '收支明细'
      }
      // end params
    }
  },
  components: {
    ButtonComponent,
    DetailListComponent,
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./account-balance.scss";
</style>
