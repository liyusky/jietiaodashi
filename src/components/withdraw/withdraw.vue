<template>
  <!-- s 提现 -->
  <section class="withdraw padding-horizontal-30">
    <TitleComponent :title="title" @BACK_EVENT="backPage" @OTHER_EVENT="gotoPage"></TitleComponent>
    <div class="withdraw-content padding-horizontal-30 bg-white">
      <div class="content-title">
        <p>提现金额</p>
      </div>
      <div class="content-input border-bottom-1">
        <i class="iconfont icon-cong font-30 color-light-grey"></i>
        <input type="number" v-model="withdrawMoney">
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
import ButtonComponent from '../../module/button/button.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'WithdrawComponent',
  data () {
    return {
      withdrawMoney: '',
      usableMoney: 0,
      accountData: '',
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
  created () {
    this.usableMoney = Storage.usableMoney
    this.getData()
  },
  methods: {
    backPage () {
      this.$router.back(-1)
    },
    getData () {
      let date = new Date()
      let year = date.getFullYear()
      let month = date.getMonth()
      let day = date.getDate()
      let hour = date.getHours()
      let minute = date.getMinutes()
      this.accountData = year + '-' + (month + 1) + '-' + day + ' ' + (hour + 2) + ':' + minute
    },
    gotoPage () {},
    allWithout () {
      this.withdrawMoney = this.usableMoney
    },
    withdrawSubmit () {
      if (!Check.money(this.amountNumber)) return
      BM.send({
        url: 'Withdraw',
        data: {
          zh: Storage.phone,
          amt: this.withdrawMoney
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
