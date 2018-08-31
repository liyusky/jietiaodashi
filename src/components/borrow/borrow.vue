<template>
  <!-- s  我要借款-->
  <section class="borrow">
    <TitleComponent :title="title" @BACK_EVENT="backPage"></TitleComponent>
    <div class="borrow-tip">
      <div class="tip-icon">
        <i class="iconfont icon-cong"></i>
      </div>
      <p class="tip-text" id="tip">警惕"扫码退款"转账到安全账户"等骗术",请保护好你的资金安全</p>
    </div>
    <div class="borrow-form-top">
      <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-cong"></i>
          <span>借款金额</span>
        </div>
        <div class="itme-default">
          <input type="text" v-model="borrowAmount" placeholder="10的倍数(最大可借10000.0)">
          <span>元</span>
        </div>
      </div>
      <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-cong"></i>
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
          <i class="iconfont icon-cong"></i>
          <span>还款期限</span>
        </div>
        <div class="itme-deadline">
          <span class="deadline-date" @click="openDeadlineModal">{{borrowDate}}</span>
          <span>{{borrowDeadline}}</span>
          <span>天</span>
        </div>
      </div>
    </div>
    <div class="borrow-form-bottom">
      <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-cong"></i>
          <span>借款用途</span>
        </div>
        <div class="itme-default" @click="gotoPage('purpose')">
          <input type="text" v-model="borrowPurpose" placeholder="临时周转">
          <i class="iconfont icon-cong"></i>
        </div>
      </div>
      <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-cong"></i>
          <span>发布对象</span>
        </div>
        <div class="itme-default">
          <input type="text" v-model="borrowObject" placeholder="请选择">
          <i class="iconfont icon-cong"></i>
        </div>
      </div>
      <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-cong"></i>
          <span>借款发布期</span>
        </div>
        <div class="itme-default" @click="gotoPage('publish')">
          <input type="text" v-model="borrowPublish" placeholder="20天(自动续借)">
          <i class="iconfont icon-cong"></i>
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
    <DeadlineComponent v-show="deadLineShow" @SELECT_DATA_EVENT="getDeadline" @CANCEL_EVENT="closeModal"></DeadlineComponent>
  </section>
  <!-- e  我要借款-->
</template>

<script>
// include dependence
import ButtonComponent from '../../module/button/button.vue'
import DeadlineComponent from '../../module/deadline/deadline.vue'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'BorrowComponent',
  data () {
    return {
      borrowDate: '',
      rateAmount: '',
      ratePercent: '',
      borrowAmount: '',
      borrowObject: '',
      borrowDeadline: '7',
      borrowPublish: '',
      borrowPurpose: '',
      purposeShow: false,
      deadLineShow: false,
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '发布借条'
        }]
      },
      'deadline': true,
      'tip': {
        type: 'default',
        content: '已同意协议',
        protocol: '借条大师协议',
        icon: 'cong',
        selected: 'true'
      },
      'title': {
        contentText: '我要借款',
        icon: 'cong'
      }
      // end params
    }
  },
  components: {
    // include components
    TitleComponent,
    ButtonComponent,
    TipComponent,
    DeadlineComponent
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
    gotoPage (page) {
      this.$router.push({
        name: page
      })
    },
    gotoPublishPage () {
      this.publishShow = true
    },
    // getPurpose (item) {
    //   this.borrowPurpose = item
    //   this.purposeShow = false
    // },
    // getPublish (item, switchShow) {
    //   this.borrowPublish = switchShow ? item + '天(自动续借)' : item + '天'
    //   this.publishShow = false
    // },
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
    openDeadlineModal () {
      this.deadLineShow = true
    },
    closeModal () {
      this.deadLineShow = false
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
