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
          <input type="number" v-model="borrowAmount" placeholder="10的倍数" @keyup="limitBorrowAmount">
          <span>元</span>
        </div>
      </div>
      <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-cong"></i>
          <span>年华利率</span>
        </div>
        <div class="item-rate">
          <input type="number" placeholder="0~24" v-model="ratePercent" @keyup="limitRatePercent">
          <span>%</span>
          <input type="number" placeholder="利率金额" v-model="rateAmount">
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
          <span class="default-value">{{borrowPurpose}}</span>
          <i class="iconfont icon-cong"></i>
        </div>
      </div>
      <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-cong"></i>
          <span>发布对象</span>
        </div>
        <div class="itme-default" @click="gotoPage('publish-object')">
          <span class="default-value">{{borrowObject}}</span>
          <i class="iconfont icon-cong"></i>
        </div>
      </div>
      <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-cong"></i>
          <span>借款发布期</span>
        </div>
        <div class="itme-default" @click="openPublishMadol">
          <span class="default-value">{{borrowPublish}}</span>
          <i class="iconfont icon-cong"></i>
        </div>
      </div>
      <div class="form-refund">
        <span>实际到账金额</span>
        <span class="refund-actual">{{borrowAmount ? borrowAmount : 0.00}}元</span>
        <span>到期还款总额</span>
        <span class="refund-total">{{paymentTotl ? paymentTotl : 0.00}}元</span>
      </div>
    </div>
    <div class="borrow-potocol">
      <TipComponent :tip="tip" @TOGGLE_SELECTED_EVENT="getTipSelected"></TipComponent>
    </div>
    <div class="borrow-submit">
      <ButtonComponent :button="button" @SUBMIT_EVENT="publishSubmit"></ButtonComponent>
    </div>
    <DeadlineComponent v-show="deadLineShow" @SELECT_DATA_EVENT="getDeadline" @CANCEL_EVENT="closeModal"></DeadlineComponent>
    <PublishComponent v-show="purposeShow" @SELECT_PUBLISH_EVENT="getPublish" @CANCEL_PUBLISH_EVENT="closeModal"></PublishComponent>
  </section>
  <!-- e  我要借款-->
</template>

<script>
import PublishComponent from './publish/publish.vue'
// include dependence
import Http from '../../../class/Http.class.js'
import Storage from '../../../class/Storage.class.js'
import ButtonComponent from '../../../module/button/button.vue'
import DeadlineComponent from '../../../module/deadline/deadline.vue'
import TipComponent from '../../../module/tip/tip.vue'
import TitleComponent from '../../../module/title/title.vue'
export default {
  name: 'BorrowComponent',
  data () {
    return {
      borrowDate: '',
      rateAmount: 0,
      ratePercent: '',
      borrowAmount: '',
      paymentTotl: '',
      borrowObject: '请选择',
      borrowObjectPhone: [],
      borrowObjectImAccid: [],
      phoneStr: '',
      imAccidStr: '',
      borrowDeadline: '7',
      borrowPublish: '3',
      borrowPurpose: '临时周转',
      purposeShow: false,
      deadLineShow: false,
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '发布借条'
        }]
      },
      'tip': {
        type: 'default',
        content: '已同意协议',
        protocol: '借条大师协议',
        icon: 'cong',
        selected: 'true'
      },
      'title': {
        contentText: '我要借款'
      }
      // end params
    }
  },
  components: {
    // include components
    TitleComponent,
    ButtonComponent,
    TipComponent,
    DeadlineComponent,
    PublishComponent
  },
  mounted () {
    this.scroll()
    this.getDate(7)
    if (this.$store.state.origin.path === '/publish-object') {
      this.borrowPurpose = this.$store.state.purpose
    }
    if (this.$store.state.friendList) {
      this.$store.state.friendList.forEach(ele => {
        this.borrowObjectPhone.push(ele.phone)
        this.borrowObjectImAccid.push(ele.imAccid)
      })
      this.phoneStr = this.borrowObjectPhone.toString().split(',')
      this.imAccidStr = this.borrowObjectImAccid.toString().split(',')
      this.borrowObject = '好友'
    }
  },
  methods: {
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
    getDate (AddDayCount) {
      var date = new Date()
      date.setDate(date.getDate() + AddDayCount)
      var y = date.getFullYear()
      var m = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
      var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      this.borrowDate = y + '-' + m + '-' + d
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
    backPage () {
      if (this.$store.state.origin.path === '/purpose') {
        this.$router.push({
          name: 'index'
        })
        return
      }
      this.$router.back(-1)
    },
    gotoPage (page) {
      this.$router.push({
        name: page
      })
    },
    getPublish (publish) {
      this.purposeShow = false
      this.borrowPublish = publish
    },
    getTipSelected (selected) {
      this.tip.selected = selected
    },
    limitBorrowAmount () {
      if (parseInt(this.borrowAmount) < 0 || parseInt(this.borrowAmount) > 10000) {
        alert('输入0~10000值')
        this.borrowAmount = ''
      }
    },
    limitRatePercent () {
      if (this.ratePercent < 0 || this.ratePercent > 24) {
        alert('请输入0~24的利率')
        this.ratePercent = ''
      }
    },
    // 发布借条
    publishSubmit () {
      if (!this.borrowAmount) return
      if (!this.ratePercent) return
      if (!this.tip.selected) return
      Http.send({
        url: 'CreateSys',
        data: {
          token: Storage.token,
          phone: Storage.phone,
          type: 1,
          amount: this.borrowAmount, // 借款金额 int
          lendPhones: this.phoneStr, // 出借人手机集合(多个借款方用","隔开)
          imAccid: this.imAccidStr, // 出借人云信用id(多个借款方用","隔开)
          yearRate: this.ratePercent, // 年利率  int
          Interest: this.rateAmount, // 利息  double
          period: this.borrowDeadline, // 借款期限 7天  int
          otherCost: 20.1, // 其他费用  double
          purpose: this.borrowPurpose, // 借款用途 string
          purposeReason: '借点钱周转一下', // 借款用途说明 string
          expireDay: this.borrowPublish, // 借款发布期 7天  int
          taskId: 'D34E1519-0558-44FA-9731-D0B34423E5AB,D34E1519-0558-44FA-9731-D0B34423E5AB', // 任务单集合(多个任务单用","隔开)
          source: 1
        }
      }).success(data => {
      }).fail(data => {
      })
    },
    openDeadlineModal () {
      this.deadLineShow = true
    },
    openPublishMadol () {
      this.purposeShow = true
    },
    closeModal () {
      this.purposeShow = false
      this.deadLineShow = false
    }
  },
  watch: {
    ratePercent (newNum, oldNum) {
      if (!this.borrowAmount) return
      this.rateAmount = parseFloat(this.borrowAmount * newNum)
      this.paymentTotl = parseInt(this.borrowAmount) + this.rateAmount
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./wanna-borrow.scss";
</style>
