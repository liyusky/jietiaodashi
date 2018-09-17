<template>
  <!-- s 充值 -->
  <section class="recharge padding-horizontal-30">
    <TitleComponent :title="title" @OTHER_EVENT="gotoPage" @BACK_EVENT="back"></TitleComponent>
    <div class="recharge-content padding-horizontal-30 bg-white">
      <div class="content-amount">
        <span class="font-30 color-black">充值金额</span>
      </div>
      <div class="content-input border-bottom-1">
        <i class="iconfont icon-cong font-30 color-light-grey"></i>
        <input type="number" v-model="rechargeMoney">
      </div>
    </div>
    <div class="recharge-button padding-horizontal-30">
      <ButtonComponent :button="button" @SINGLE_SUBMIT_EVENT="rechargeSubmit"></ButtonComponent>
    </div>
  </section>
  <!-- e 充值 -->
</template>

<script>
// include dependence
import BM from '../../class/BM.class.js'
import Check from '../../class/Check.class.js'
import ButtonComponent from '../../module/button/button.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'RechargeComponent',
  data () {
    return {
      rechargeMoney: '',
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '充值'
        }]
      },
      'title': {
        contentText: '充值',
        rightText: '限额说明'
      }
      // end params
    }
  },
  components: {
    ButtonComponent,
    TitleComponent
    // include components
  },
  methods: {
    gotoPage () {},
    back () {},
    rechargeSubmit () {
      if (!Check.money(this.amountNumber)) return
      BM.send({
        url: 'Recharge',
        data: {
          zh: Storage.phone,
          amt: this.rechargeMoney
        }
      }).success(data => {
        console.log(data)
      }).fail(data => {
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./recharge.scss";
</style>
