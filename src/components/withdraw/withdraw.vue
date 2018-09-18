<template>
  <!-- s 提现 -->
  <section class="withdraw padding-horizontal-30">
    <TitleComponent :title="title"></TitleComponent>
    <div class="withdraw-content padding-horizontal-30 bg-white">
      <div class="content-title">
        <p>提现金额</p>
      </div>
      <div class="content-input border-bottom-1">
        <i class="iconfont icon-cong font-30 color-light-grey"></i>
        <input type="number" v-model="money">
      </div>
      <div class="content-introduce border-bottom-1">
         <p class="font-27 color-black"><span>可提现金额</span><span>{{usableMoney}}</span>，<span class="color-blue" @click.stop="allWithout">全部提现</span></p>
      </div>
      <div class="content-tip">
        <p class="font-27 color-black">预计到账时间  {{accountData}}</p>
      </div>
    </div>
    <div class="withdraw-button padding-horizontal-30">
      <ButtonComponent :button="button"  @SUBMIT_EVENT="withdrawSubmit"></ButtonComponent>
    </div>
  </section>
  <!-- e 提现 -->
</template>

<script>
// include dependence
import BM from '../../class/BM.class.js'
import Check from '../../class/Check.class.js'
import Storage from '../../class/Storage.class.js'
import Time from '../../class/Time.class.js'
import ButtonComponent from '../../module/button/button.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'WithdrawComponent',
  data () {
    return {
      money: '',
      usableMoney: Storage.usableMoney ? Storage.usableMoney : 0,
      accountData: Time.current('YYYY-MM-DD hh/mm/ss WW', {hour: 2}),
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '提现'
        }]
      },
      'title': {
        contentText: '提现'
      }
      // end params
    }
  },
  components: {
    ButtonComponent,
    // InputsComponent,
    TitleComponent
    // include components
  },

  methods: {
    allWithout () {
      this.money = this.usableMoney
    },
    withdrawSubmit () {
      if (!Check.money(this.money)) return
      BM.send({
        url: 'Withdraw',
        data: {
          zh: Storage.phone,
          amt: this.money
        }
      }).success(data => {
        console.log(data)
      }).fail(data => {
        console.log(data)
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./withdraw.scss";
</style>
