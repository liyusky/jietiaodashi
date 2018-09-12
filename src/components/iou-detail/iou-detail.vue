<template>
  <!-- s 借条详情 -->
  <section class="iou-detail padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <div class="detail-hint bg-white">
      <div class="hint-user border-bottom-1">
        <div class="user-img">
          <img src="https://api.vtrois.com/image/81x81">
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
    <div class="detail-dept bg-white">
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
    <div class="detail-law bg-white">
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
      <button class="button font-30 color-blue bg-white"><div>展期</div></button>
      <button class="button font-30 color-white bg-blue"><div>销账</div></button>
    </div>
  </section>
  <!-- e 借条详情 -->
</template>

<script>
// include dependence
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
import Status from '../../class/Status.enum.js'
import Storage from '../../class/Storage.class.js'
import Type from '../../class/Type.enum.js'
import ButtonComponent from '../../module/button/button.vue'
import DetailListComponent from '../../module/detail-list/detail-list.vue'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
import WorkCardComponent from '../../module/work-card/work-card.vue'
export default {
  name: 'IouDetailComponent',
  data () {
    return {
      type: '',
      name: '',
      overdueDay: '',
      state: '',
      repaymentAmount: '',
      // start params
      'button': {
        default: [{
          type: 'default',
          text: '销账'
        }],
        group: [
          {
            text: '同意',
            class: 'primary'
          },
          {
            text: '拒绝',
            class: 'danger'
          }
        ]
      },
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
          value: '0'
        }
      ],
      'title': {
        contentText: '借条详情'
      },
      'workCard': {
        portrait: '',
        name: '李艳霞',
        money: '1500.00'
      }
      // end params
    }
  },
  components: {
    ButtonComponent,
    DetailListComponent,
    TipComponent,
    TitleComponent,
    WorkCardComponent
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
        this.formatData(data)
      }).fail(data => {
      })
    },
    formatData (data) {
      this.type = Type[data.Type]
      this.overdueDay = data.OverdueDay ? data.OverdueDay + '天' : ''
      this.state = data.StateName
      this.repaymentAmount = data.RepaymentAmount
      
      this.detailList[0].value = data.Amount + '元'
      this.detailList[1].value = data.YearRate + '%'
      this.detailList[2].value = data.LoanDate
      this.detailList[3].value = data.ExpireDate
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./iou-detail.scss";
</style>
