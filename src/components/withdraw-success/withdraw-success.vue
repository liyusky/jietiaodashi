<template>
  <!-- s 提现申请成功 -->
  <section class="withdraw-success padding-top-126 bg-white">
    <TitleComponent :title="title" @BACK_EVENT="backPage" @OTHER_EVENT="gotoPage"></TitleComponent>
    <div class="success-hint">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cong"></use>
      </svg>
      <p class="color-black">申请成功，已提交银行处理</p>
      <p class="font-27 color-deep-grey">24小时内到账</p>
    </div>
    <div class="success-step">
      <div class="step-item">
        <div class="item-badge">
          <div class="badge-svg">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-cong"></use>
            </svg>
          </div>
        </div>
        <div class="item-detail">
          <p class="font-24 color-black">申请成功</p>
          <p class="font-24 color-deep-grey">12-06 15:30</p>
        </div>
      </div>
      <div class="step-item">
        <div class="item-badge">
          <div class="badge-svg">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-cong"></use>
            </svg>
          </div>
        </div>
        <div class="item-detail">
          <p class="font-24 color-black">银行处理中</p>
          <p class="font-24 color-deep-grey">12-06 16:30</p>
        </div>
      </div>
      <div class="step-item">
        <div class="item-badge">
          <div class="badge-svg">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-cong"></use>
            </svg>
          </div>
        </div>
        <div class="item-detail">
          <p class="font-24 color-black">处理成功</p>
          <p class="font-24 color-deep-grey">12-06 23:30</p>
        </div>
      </div>
    </div>
    <div class="success-button padding-horizontal-30">
      <ButtonComponent :button="button"></ButtonComponent>
    </div>
  </section>
  <!-- e 提现申请成功 -->
</template>

<script>
// include dependence
import ButtonComponent from '../../module/button/button.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'WithdrawSuccessComponent',
  data () {
    return {
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '完成'
        }]
      },
      'title': {
        contentText: '提现申请成功'
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
    backPage () {
      this.$router.back(-1)
    },
    gotoPage () {}
  }
}
</script>

<style lang="sass" scoped>
@import "./withdraw-success.scss";
</style>
