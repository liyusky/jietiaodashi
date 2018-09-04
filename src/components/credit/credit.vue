<template>
  <!-- s 授信 -->
  <section class="credit padding-top-126">
    <TitleComponent :title="title"  @BACK_EVENT="backPage"></TitleComponent>
    <div class="credit-content bg-blue">
      <div class="content-progress color-white">
        <p class="progress-title font-33">你已完成1项认证,继续加油哦</p>
        <div class="progress-bar">
          <div class="bar bg-white"></div>
        </div>
        <p class="progress-percent font-24">1/5</p>
        <p class="progress-tio font-24">距离完成还差4步，抓紧时间哦</p>
      </div>
      <div class="content-step padding-horizontal-21">
        <div class="step-item bg-white margin-bottom-21">
          <svg class="icon" aria-hidden="true" v-if="identityShow">
            <use xlink:href="#icon-cong"></use>
          </svg>
          <svg class="icon" aria-hidden="true" v-if="!identityShow">
            <use xlink:href="#icon-cangjian"></use>
          </svg>
          <div class="item-center">
            <p class="font-30 color-black">身份认证</p>
            <p class="font-24 color-black color-light-grey">上传你的真实身份信息</p>
          </div>
          <button class="item-button button bg-blue color-white font-24" :class="{'button-active': identityShow}" @click="toAttestation"><div>{{identityShow ? '已完成' : '去认证'}}</div></button>
        </div>
        <div class="step-item bg-white margin-bottom-21">
          <svg class="icon" aria-hidden="true" v-if="contactShow">
            <use xlink:href="#icon-cong"></use>
          </svg>
          <svg class="icon" aria-hidden="true" v-if="!contactShow">
            <use xlink:href="#icon-cangjian"></use>
          </svg>
          <div class="item-center">
            <p class="font-30 color-black">联系人认证</p>
            <p class="font-24 color-black color-light-grey">补全联系人资料，获取更高额度</p>
          </div>
          <button class="item-button button bg-blue color-white font-24"><div>{{identityShow ? '已完成' : '去认证'}}</div></button>
        </div>
        <div class="step-item bg-white margin-bottom-21">
          <svg class="icon" aria-hidden="true" v-if="sesameShow">
            <use xlink:href="#icon-cong"></use>
          </svg>
          <svg class="icon" aria-hidden="true" v-if="!sesameShow">
            <use xlink:href="#icon-cangjian"></use>
          </svg>
          <div class="item-center">
            <p class="font-30 color-black">芝麻分认证</p>
            <p class="font-24 color-black color-light-grey">做信用达人，晒晒芝麻信用分吧</p>
          </div>
          <button class="item-button button bg-blue color-white font-24"><div>{{identityShow ? '已完成' : '去认证'}}</div></button>
        </div>
        <div class="step-item bg-white margin-bottom-21">
          <svg class="icon" aria-hidden="true" v-if="operatorShow">
            <use xlink:href="#icon-cong"></use>
          </svg>
          <svg class="icon" aria-hidden="true" v-if="!operatorShow">
            <use xlink:href="#icon-cangjian"></use>
          </svg>
          <div class="item-center">
            <p class="font-30 color-black">运营商认证</p>
            <p class="font-24 color-black color-light-grey">最后一步授权运行商查询</p>
          </div>
          <button class="item-button button bg-blue color-white font-24"><div>{{identityShow ? '已完成' : '去认证'}}</div></button>
        </div>
        <div class="step-item bg-white">
          <svg class="icon" aria-hidden="true" v-if="cardShow">
            <use xlink:href="#icon-cong"></use>
          </svg>
          <svg class="icon" aria-hidden="true" v-if="!cardShow">
            <use xlink:href="#icon-cangjian"></use>
          </svg>
          <div class="item-center">
            <p class="font-30 color-black">银行卡认证</p>
            <p class="font-24 color-black color-light-grey">添加银行卡</p>
          </div>
          <button class="item-button button bg-blue color-white font-24"><div>{{identityShow ? '已完成' : '去认证'}}</div></button>
        </div>
      </div>
    </div>
  </section>
  <!-- e 授信 -->
</template>

<script>
// include dependence
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'CreditExtensionComponent',
  data () {
    return {
      iconShow: false,
      identityShow: false,
      contactShow: false,
      sesameShow: false,
      operatorShow: false,
      cardShow: false,
      // start params
      'title': {
        contentText: '授信'
      }
      // end params
    }
  },
  components: {
    TitleComponent
    // include components
  },
  methods: {
    toAttestation () {
      this.identityShow = true
    },
    backPage () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./credit.scss";
</style>
