<template>
  <!-- s 借条模板/出借模板 -->
  <section class="iou-template padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <div class="template-content">
      <div class="content-item padding-horizontal-21 bg-white">
        <div class="item-money">
          <div class="money-left">
            <p class="left-title"><span></span><span class="font-24">金额 (元)</span></p>
            <p class="left-amount font-51">￥700.00</p>
          </div>
          <button class="money-apply button color-white font-24 bg-blue"><div>申请</div></button>
        </div>
        <div class="item-detail padding-horizontal-30">
          <p class="detail-message font-27 color-light-grey">
            <span>到期还款金额：700.0元</span>
            <span>借款周期：7天</span>
          </p>
          <p class="detail-message font-27 color-light-grey">
            <span>年利率：0%</span>
            <span>其他费用：0.0元</span>
          </p>
        </div>
      </div>
      <div class="content-item padding-horizontal-21 bg-white">
        <div class="item-money">
          <div class="money-left">
            <p class="left-title"><span></span><span class="font-24">金额 (元)</span></p>
            <p class="left-amount font-51">￥700.00</p>
          </div>
          <button class="money-apply button color-white font-24 bg-blue"><div>申请</div></button>
        </div>
        <div class="item-detail padding-horizontal-30">
          <p class="detail-message font-27 color-light-grey">
            <span>到期还款金额：700.0元</span>
            <span>借款周期：7天</span>
          </p>
          <p class="detail-message font-27 color-light-grey">
            <span>年利率：0%</span>
            <span>其他费用：0.0元</span>
          </p>
        </div>
      </div>
      <div class="content-item padding-horizontal-21 bg-white">
        <div class="item-money">
          <div class="money-left">
            <p class="left-title"><span></span><span class="font-24">金额 (元)</span></p>
            <p class="left-amount font-51">￥700.00</p>
          </div>
          <button class="money-apply button color-white font-24 bg-blue"><div>申请</div></button>
        </div>
        <div class="item-detail padding-horizontal-30">
          <p class="detail-message font-27 color-light-grey">
            <span>到期还款金额：700.0元</span>
            <span>借款周期：7天</span>
          </p>
          <p class="detail-message font-27 color-light-grey">
            <span>年利率：0%</span>
            <span>其他费用：0.0元</span>
          </p>
        </div>
      </div>
      <div class="content-item padding-horizontal-21 bg-white">
        <div class="item-money">
          <div class="money-left">
            <p class="left-title"><span></span><span class="font-24">金额 (元)</span></p>
            <p class="left-amount font-51">￥700.00</p>
          </div>
          <button class="money-apply button color-white font-24 bg-blue"><div>申请</div></button>
        </div>
        <div class="item-detail padding-horizontal-30">
          <p class="detail-message font-27 color-light-grey">
            <span>到期还款金额：700.0元</span>
            <span>借款周期：7天</span>
          </p>
          <p class="detail-message font-27 color-light-grey">
            <span>年利率：0%</span>
            <span>其他费用：0.0元</span>
          </p>
        </div>
      </div>
      <div class="content-item padding-horizontal-21 bg-white">
        <div class="item-money">
          <div class="money-left">
            <p class="left-title"><span></span><span class="font-24">金额 (元)</span></p>
            <p class="left-amount font-51">￥700.00</p>
          </div>
          <button class="money-apply button color-white font-24 bg-blue"><div>申请</div></button>
        </div>
        <div class="item-detail padding-horizontal-30">
          <p class="detail-message font-27 color-light-grey">
            <span>到期还款金额：700.0元</span>
            <span>借款周期：7天</span>
          </p>
          <p class="detail-message font-27 color-light-grey">
            <span>年利率：0%</span>
            <span>其他费用：0.0元</span>
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- e 借条模板/出借模板 -->
</template>

<script>
// include dependence
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'IouTemplateComponent',
  data () {
    return {
      // start params
      'title': {
        contentText: '借条模板'
      }
      // end params
    }
  },
  components: {
    TitleComponent
    // include components
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
@import "./iou-template.scss";
</style>
