<template>
  <!-- s 展期 -->
  <section class="exhibiton-period padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <div class="period-hint padding-horizontal-30 border-bottom-1">
      <p class="font-24 color-light-black">对方已逾期15天，您可以展期以延长借款期限</p>
    </div>
    <div class="period-form padding-horizontal-30 border-bottom-1 bg-white">
      <div class="form-delayed border-bottom-1">
        <div class="delayed-title">
          <i class="iconfont icon-cong font-24 color-light-blue"></i>
          <p class="font-27 color-black">延后到期日</p>
        </div>
        <div class="delayed-deadline">
          <p class="deadline-date font-27 color-black">2017-08-12</p>
          <div class="deadline-number">
            <span class="font-30 color-light-black">7</span>
            <span class="font-30 color-black">天</span>
            <i class="iconfont icon-cong font-30"></i>
          </div>
        </div>
      </div>
      <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-cong color-light-blue"></i>
          <p class="font-27 color-black">展期利率</p>
        </div>
        <div class="item-right">
          <input type="text" v-model="interest" placeholder="0-24">
          <span>%</span>
        </div>
      </div>
      <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-cong color-light-blue"></i>
          <p class="font-27 color-black">使用原借利率</p>
        </div>
        <div class="item-right">
          <div class="right-switch" :class="{'switch-active': switchShow}" @click="switchToggle">
            <div class="switch-btn"></div>
          </div>
        </div>
      </div>
      <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-cong color-light-blue"></i>
          <p class="font-27 color-black">已结费用</p>
        </div>
        <div class="item-right">
          <span class="font-30 color-light-black">7</span>
          <span class="font-30 color-black">元</span>
        </div>
      </div>
      <div class="form-tip">
        <p class="font-27 color-light-grey">提示：展期期间，将按该年利率计算利息</p>
      </div>
    </div>
    <div class="period-tip padding-left-30">
      <TipComponent :tip="tip"></TipComponent>
    </div>
    <div class="period-button padding-horizontal-30">
      <ButtonComponent :button="button"></ButtonComponent>
    </div>
  </section>
  <!-- e 展期 -->
</template>

<script>
// include dependence
import ButtonComponent from '../../module/button/button.vue'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'ExhibitonPeriodComponent',
  data () {
    return {
      switchShow: true,
      interest: '',
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '同意展期'
        }]
      },
      'tip': {
        type: 'default',
        content: '同意相关协议',
        icon: 'cong',
        selected: 'true'
      },
      'title': {
        contentText: '展期'
      }
      // end params
    }
  },
  components: {
    ButtonComponent,
    TipComponent,
    TitleComponent
    // include components
  },
  methods: {
    switchToggle () {
      this.switchShow = !this.switchShow
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./exhibiton-period.scss";
</style>
