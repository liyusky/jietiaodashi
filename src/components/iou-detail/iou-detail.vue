<template>
  <!-- s 借条详情 -->
  <section class="iou-detail padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <div class="detail-hint bg-white">
      <div class="hint-user border-bottom-1">
        <div class="user-img">
          <img src="http://iph.href.lu/120x150">
        </div>
        <div class="user-info font-27 color-black">
          <p class="info-loan "><span></span><span>{{type}}</span></p>
          <p class="info-sign"><span>{{name}}</span><i class="iconfont icon-cong font-30 color-blue"></i></p>
        </div>
        <div class="user-tip">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cong"></use>
          </svg>
          <p class="font-24 color-black">{{state}}{{overdueDay}}</p>
        </div>
      </div>
      <div class="hint-repayment">
        <p class="font-27 color-black">
          <span>待还款金额</span>
          <span class="font-39">{{repaymentAmount}}元</span>
        </p>
      </div>
    </div>
    <div class="detail-loan bg-white">
      <div class="loan-title padding-horizontal-30 border-bottom-1">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cong"></use>
        </svg>
        <p class="font-27 color-black">借出详情</p>
      </div>
      <DetailListComponent class="loan-list bg-white padding-horizontal-30 font-27" :detailList="detailList"></DetailListComponent>
    </div>
    <div class="detail-dept bg-white" v-show="urge">
      <div class="loan-title padding-horizontal-30 border-bottom-1">
        <div class="title-left">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cong"></use>
          </svg>
          <p>借出详情</p>
        </div>
        <button class="button color-white font-27"><div>打赏催收</div></button>
      </div>
      <div class="dept-content padding-horizontal-30">
        <p class="font-24 color-black">合法催收智慧化解债务债券矛盾</p>
      </div>
    </div>
    <div class="detail-law bg-white" v-show="arbitrate">
      <div class="law-title padding-horizontal-30 border-bottom-1">
        <div class="title-left">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cong"></use>
          </svg>
          <p>法律服务</p>
        </div>
        <button class="button color-white font-27"><div>委托仲裁</div></button>
      </div>
      <div class="law-content padding-horizontal-30">
        <p class="font-24 color-black">30-40天极速裁决结果，执行回款的第一步，与诉讼具有同等效力</p>
      </div>
    </div>
    <div class="detail-button bg-white">
      <button class="button font-30 color-blue bg-white" v-show="button[0]" @click="leftOperate(0)"><div>{{button[0]}}</div></button>
      <button class="button font-30 color-white bg-blue" v-show="button[1]" @click="rightOperate(1)"><div>{{button[1]}}</div></button>
    </div>
    <ModalComponent class="detail-modal" v-show="modalShow" @CLOSE_EVENT="close">
      <div class="modal-content bg-white">
        <TipComponent class="modal-tip color-deep-grey border-bottom-1" :tip="tip"></TipComponent>
        <PayPasswordComponent class="modal-pay-password" :payPassword="payPassword"></PayPasswordComponent>
        <KeyboardComponent class="modal-keyboard" @PRESS_EVENT="input" @REMOVE_EVENT="remove"></KeyboardComponent>
      </div>
    </ModalComponent>
  </section>
  <!-- e 借条详情 -->
</template>

<script>
// include dependence
import BM from '../../class/BM.class.js'
import Btn from '../../class/Btn.enum.js'
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import Type from '../../class/Type.enum.js'
import DetailListComponent from '../../module/detail-list/detail-list.vue'
import KeyboardComponent from '../../module/keyboard/keyboard.vue'
import ModalComponent from '../../module/modal/modal.vue'
import PayPasswordComponent from '../../module/pay-password/pay-password.vue'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'IouDetailComponent',
  data () {
    return {
      id: null,
      type: '',
      name: '',
      overdueDay: '',
      state: '',
      repaymentAmount: '',
      urge: false,
      arbitrate: false,
      btnLeft: '',
      btnRight: '',
      button: [],
      page: [],
      amountReturned: 0,
      targetAccount: null,
      modalShow: false,
      // start params
      'detailList': [
        {
          type: 'default',
          key: '借出本金：',
          value: ''
        },
        {
          type: 'default',
          key: '年利率：',
          value: ''
        },
        {
          type: 'default',
          key: '借款日：',
          value: ''
        },
        {
          type: 'default',
          key: '到期日：',
          value: ''
        },
        {
          type: 'default',
          key: '其他费用：',
          value: '0元'
        }
      ],
      'payPassword': [],
      'tip': {
        type: 'center',
        content: '请输入支付密码'
      },
      'title': {
        contentText: '借条详情'
      }
      // end params
    }
  },
  components: {
    DetailListComponent,
    KeyboardComponent,
    ModalComponent,
    PayPasswordComponent,
    TipComponent,
    TitleComponent
    // include components
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      Http.send({
        url: 'IouDetail',
        data: {
          token: Storage.token,
          id: Storage.id,
          userPhone: Storage.phone
        }
      }).success(data => {
        console.log(data)
        this.formatData(data)
      }).fail(data => {
      })
    },
    formatData (data) {
      this.name = data.LendName
      this.type = Type[data.Type]
      this.state = data.StateName
      this.amountReturned = data.AmountReturned
      this.overdueDay = data.OverdueDay ? data.OverdueDay + '天' : ''
      this.repaymentAmount = data.RepaymentAmount
      this.targetAccount = data.LendPhone
      this.id = data.Id
      this.detailList[0].value = data.Amount + '元'
      this.detailList[1].value = data.YearRate + '%'
      this.detailList[2].value = data.LoanDate
      this.detailList[3].value = data.ExpireDate
      this.button[0] = Btn[data.ButtonType][0]
      this.button[1] = Btn[data.ButtonType][1]
      this.arbitrate = Btn[data.ButtonType][2]
      this.urge = Btn[data.ButtonType][3]
      switch (data.ButtonType) {
        case 1:
          this.leftOperate = this.confirm
          this.rightOperate = this.refuse
          break
        case 2:
          this.page = ['transactions']
          this.leftOperate = this.target
          break
        case 3:
          this.leftOperate = this.repay
          break
        case 4:
          this.leftOperate = this.repay
          this.rightOperate = this.renewal
          break
        case 5:
          this.page = ['exhibiton-period', 'cancel-account']
          this.leftOperate = this.target
          this.rightOperate = this.target
          break
        case 6:
          this.page = ['exhibiton-period', 'cancel-account']
          this.leftOperate = this.target
          this.rightOperate = this.target
          break
        case 7:
          this.leftOperate = this.cancelAbitrate
          break
        case 8:
          this.leftOperate = this.cancelApply
          break
        case 9:
          this.leftOperate = this.waitConfirm
          break
        case 10:
          this.page = ['exhibition-status']
          this.leftOperate = this.target
          break
        case 11:
          this.page = ['transactions']
          this.leftOperate = this.target
          break
        case 12:
          this.page = ['exhibiton-period', 'cancel-account']
          this.leftOperate = this.target
          this.rightOperate = this.target
          break
      }
    },
    leftOperate () {},
    rightOperate () {},
    confirm () {
      Http.send({
        url: 'LoanCollectionCancel',
        data: {
          token: Storage.token,
          id: Storage.id,
          state: 1
        }
      }).success(data => {
      }).fail(data => {
      })
    },
    refuse () {
      Http.send({
        url: 'LoanCollectionCancel',
        data: {
          token: Storage.token,
          id: Storage.id,
          state: 0
        }
      }).success(data => {
      }).fail(data => {
      })
    },
    target (index) {
      if (this.page[index] === 'cancel-account') {
        Storage.gapMoney = this.repaymentAmount
        Storage.payedMoney = this.amountReturned
      }
      Router.push(this.page[index])
    },
    repay () {
      this.modalShow = true
    },
    renewal () {},
    cancelAbitrate () {
    },
    cancelApply () {
      Http.send({
        url: 'LoanCollectionCancel',
        data: {
          token: Storage.token,
          id: Storage.id,
          phone: Storage.phone
        }
      }).success(data => {
      }).fail(data => {
      })
    },
    waitConfirm () {
    },
    close () {
      this.modalShow = false
    },
    input (number) {
      if (this.payPassword.length < 6) this.payPassword.push(number)
      if (this.payPassword.length === 6) {
        this.modalShow = false
        BM.send({
          url: 'Repay',
          data: {
            czzh: Storage.phone,
            rzzh: this.targetAccount,
            je: this.repaymentAmount,
            tranType: 1,
            lid: this.id,
            ppwd: this.payPassword.join('')
          }
        }).success(data => {
        }).fail(data => {
        })
        this.payPassword = []
      }
    },
    remove () {
      if (this.payPassword.length > 0) this.payPassword.pop()
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./iou-detail.scss";
</style>
