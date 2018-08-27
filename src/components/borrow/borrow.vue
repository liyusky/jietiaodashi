<template>
  <!-- s  我要借款-->
  <section class="borrow">
    <TitleComponent :title="title" @BACK_EVENT="backPage"></TitleComponent>
    <div class="borrow-tip">
      <div class="tip-icon">
        <i class="iconfont icon-dunpai"></i>
      </div>
      <p class="tip-text" id="tip">警惕"扫码退款"转账到安全账户"等骗术",请保护好你的资金安全</p>
    </div>
    <div class="borrow-form-top">
      <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-yanjing"></i>
          <span>借款金额</span>
        </div>
        <div class="itme-default">
          <input type="text" v-model="borrowAmount" placeholder="10的倍数(最大可借10000.0)">
          <span>元</span>
        </div>
      </div>
      <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-yanjing"></i>
          <span>年华利率</span>
        </div>
        <div class="item-rate">
          <input type="text" placeholder="0~36%" v-model="ratePercent">
          <span>%</span>
          <input type="text" placeholder="利率金额" v-model="rateAmount">
          <span>￥</span>
        </div>
      </div>
      <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-yanjing"></i>
          <span>还款期限</span>
        </div>
        <div class="itme-deadline">
          <span class="deadline-date" @click="openModal">{{borrowDate}}</span>
          <span>{{borrowDeadline}}</span>
          <span>天</span>
        </div>
      </div>
    </div>
    <div class="borrow-form-bottom">
      <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-yanjing"></i>
          <span>借款用途</span>
        </div>
        <div class="itme-default" @click="gotoPurposePage">
          <input type="text" v-model="borrowPurpose" placeholder="临时周转">
          <i class="iconfont icon-arrow-right"></i>
        </div>
      </div>
      <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-yanjing"></i>
          <span>发布对象</span>
        </div>
        <div class="itme-default">
          <input type="text" v-model="borrowObject" placeholder="请选择">
          <i class="iconfont icon-arrow-right"></i>
        </div>
      </div>
      <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-yanjing"></i>
          <span>借款发布期</span>
        </div>
        <div class="itme-default" @click="gotoPublishPage">
          <input type="text" v-model="borrowPublish" placeholder="20天(自动续借)">
          <i class="iconfont icon-arrow-right"></i>
        </div>
      </div>
      <div class="form-refund">
        <span>实际到账金额</span>
        <span class="refund-actual">0.00元</span>
        <span>到期还款总额</span>
        <span class="refund-total">0.00元</span>
      </div>
    </div>
    <div class="borrow-potocol">
      <TipComponent :tip="tip"></TipComponent>
    </div>
    <div class="borrow-submit">
      <ButtonComponent :button="button"></ButtonComponent>
    </div>
    <DeadlineComponent :yearList="yearList" v-show="deadLineShow" @SELECT_DATA_EVENT="getDeadline" @CANCEL_EVENT="closeModal"></DeadlineComponent>
    <PurposeComponent v-show="purposeShow" @SAVE_PURPOSE_EVENT="getPurpose" @BACK_EVENT="closeModal"></PurposeComponent>
    <PublishComponent v-show="publishShow" @SAVE_PUBLISH_EVENT="getPublish" @BACK_EVENT="closeModal"></PublishComponent>
  </section>
  <!-- e  我要借款-->
</template>

<script>
// include dependence
import TitleComponent from '../../module/title/title.vue'
import InputsComponent from '../../module/inputs/inputs.vue'
import TipComponent from '../../module/tip/tip.vue'
import ButtonComponent from '../../module/button/button.vue'
import DeadlineComponent from './deadline/deadline.vue'
import PurposeComponent from './purpose/purpose.vue'
import PublishComponent from './publish/publish.vue'
// import data from '../../data/data'

export default {
  name: 'BorrowComponent',
  data () {
    return {
      title: {
        contentText: '我要借款'
      },
      tip: {
        type: 'default',
        content: '我已阅读并同意',
        protocol: '借款服务协议',
        icon: 'dui',
        selected: 'true'
      },
      button: {
        type: 'default',
        firstName: '发布借条'
      },
      borrowAmount: '',
      ratePercent: '',
      rateAmount: '',
      borrowDeadline: '7',
      borrowDate: '',
      borrowPurpose: '',
      borrowObject: '',
      borrowPublish: '',
      yearList: ['2018', '2019', '2020'],
      deadLineShow: false,
      purposeShow: false,
      publishShow: false
    }
  },
  components: {
    // include components
    TitleComponent,
    InputsComponent,
    TipComponent,
    ButtonComponent,
    DeadlineComponent,
    PurposeComponent,
    PublishComponent
  },
  mounted () {
    this.scroll()
    this.getDate(7)
  },
  methods: {
    getDate (AddDayCount) {
      var date = new Date()
      date.setDate(date.getDate() + AddDayCount)
      var y = date.getFullYear()
      var m = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
      var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      this.borrowDate = y + '-' + m + '-' + d
    },
    backPage () {
      this.$router.back(-1)
    },
    scroll () {
      var tip = document.getElementById('tip')
      var left = tip.offsetLeft
      setInterval(() => {
        var offset = tip.offsetLeft
        var speed = 1
        tip.style.left = offset - speed + 'px'
        if (tip.offsetLeft <= (left - tip.offsetWidth)) {
          tip.style.left = (tip.offsetWidth + left - 30) + 'px'
        }
      }, 8)
    },
    gotoPurposePage () {
      this.purposeShow = true
    },
    gotoPublishPage () {
      this.publishShow = true
    },
    getPurpose (item) {
      this.borrowPurpose = item
      this.purposeShow = false
    },
    getPublish (item, switchShow) {
      this.borrowPublish = switchShow ? item + '天(自动续借)' : item + '天'
      this.publishShow = false
    },
    getDeadline (year, mouth, day) {
      var date = new Date()
      date.setHours(0)
      date.setMinutes(0)
      date.setSeconds(0)
      date.setMilliseconds(0)
      var date1 = new Date(year, mouth - 1, day)
      var timeDiff = date1.getTime() - date.getTime()
      this.borrowDeadline = parseInt(timeDiff / 1000 / 60 / 60 / 24) + 1
      this.borrowDate = year + '-' + mouth + '-' + day
      this.deadLineShow = false
    },
    openModal () {
      this.deadLineShow = true
    },
    closeModal () {
      this.purposeShow = false
      this.deadLineShow = false
      this.publishShow = false
    }
  },
  watch: {
    rateAmount (newNum, oldNum) {
      this.rateAmount = this.ratePercent * this.borrowAmount
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./borrow.scss";
</style>
