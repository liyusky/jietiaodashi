<template>
  <!-- s 个人信息 -->
  <section class="personal-info">
    <div class="info-header">
      <div class="header font-30">
        <i class="iconfont icon-cong" @click="back"></i>
        <span>个人资料</span>
        <i class="iconfont icon-cong"></i>
      </div>
    </div>
    <div class="info-user">
      <div class="user-portrait">
        <img src="../../assets/images/master.png">
      </div>
      <div class="user-detail">
        <p class="detail-id"><span>借条ID：</span><span>123546</span></p>
        <p class="detail-name">{{personalDetail.Name}}</p>
        <div class="detail-attestation">
          <div class="attestation-item">实名</div>
          <div class="attestation-item">肖像</div>
          <div class="attestation-item">银行卡</div>
        </div>
      </div>
    </div>
    <div class="info-tab">
      <div class="tab-nav">
        <div class="nav-item" :class="{'nav-active': !tabSwitchShow}" @click="tabSwitchHome">主页</div>
        <div class="nav-item" :class="{'nav-active': tabSwitchShow}" @click="tabSwitchDeal">交易</div>
      </div>
      <div class="tab-content">
        <div class="content-home" v-if="!tabSwitchShow">
          <ul class="home-list">
            <li class="list-item">
              <div class="item-value">
                <span>进行中的借款</span>
                <span>{{personalDetail.BorrowCount}}</span>
              </div>
              <i class="iconfont icon-cong"></i>
            </li>
            <li class="list-item">
              <div class="item-value">
                <span>手机号</span>
                <span>{{personalDetail.ContactTel}}</span>
              </div>
            </li>
            <li class="list-item">
              <div class="item-value">
                <span>注册于</span>
                <span>{{personalDetail.RegTime}}</span>
              </div>
            </li>
            <li class="list-item">
              <div class="item-value">
                <span>信用记录</span>
                <span>{{personalDetail.OverdueCount}}</span>
              </div>
            </li>
            <li class="list-item" @click="gotoPage('credit')">
              <div class="item-value">
                <span>认证中心</span>
                <span>{{personalDetail.creditCenter}}</span>
              </div>
              <i class="iconfont icon-cong"></i>
            </li>
          </ul>
        </div>
        <div class="content-deal" v-if="tabSwitchShow">
          <div class="deal-total">
            <div class="title">全部借贷情况</div>
            <ul class="list">
              <li class="list-item">
                <p class="item-title">类型</p>
                <div class="itme-right">
                  <p>借入</p>
                  <p>借出</p>
                </div>
              </li>
              <li class="list-item">
                <p class="item-title">累计笔数</p>
                <div class="itme-right">
                  <p>{{transferInfo.BorrowCount_All}}</p>
                  <p>{{transferInfo.LoanCount_All}}</p>
                </div>
              </li>
              <li class="list-item">
                <p class="item-title">当前金额</p>
                <div class="itme-right">
                  <p>{{transferInfo.BorrowAmount_All}}</p>
                  <p>{{transferInfo.LoanAmount_All}}</p>
                </div>
              </li>
              <li class="list-item">
                <p class="item-title">未偿还金额</p>
                <div class="itme-right">
                  <p>{{transferInfo.UnpaidBorrowAmount_All}}</p>
                  <p>{{transferInfo.UnpaidLoanAmount_All}}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="deal-progress">
            <div class="title">进行中的借款</div>
            <ul class="list">
              <li class="list-item">
                <p class="item-title">类型</p>
                <div class="itme-right">
                  <p>借入 <i class="iconfont icon-cong"></i></p>
                  <p>借出</p>
                </div>
              </li>
              <li class="list-item">
                <p class="item-title">累计笔数</p>
                <div class="itme-right">
                  <p>{{transferInfo.BorrowCount_Conduct}}</p>
                  <p>{{transferInfo.LoanCount_Conduct}}</p>
                </div>
              </li>
              <li class="list-item">
                <p class="item-title">当前金额</p>
                <div class="itme-right">
                  <p>{{transferInfo.BorrowAmount_Conduct}}</p>
                  <p>{{transferInfo.LoanAmount_Conduct}}</p>
                </div>
              </li>
              <li class="list-item">
                <p class="item-title">未偿还金额</p>
                <div class="itme-right">
                  <p>{{transferInfo.UnpaidBorrowAmount_Conduct}}</p>
                  <p>{{transferInfo.UnpaidLoanAmount_Conduct}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- e 个人信息 -->
</template>

<script>
// include dependence
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
export default {
  name: 'PersonalInfoComponent',
  data () {
    return {
      personalDetail: null,
      transferInfo: null,
      tabSwitchShow: false
      // start params
      // end params
    }
  },
  components: {
    // include components
  },
  created () {
    console.log(this.$store.state.token)
    console.log(this.$store.state.phone)
    Http.send({
      url: 'PersonalDetail',
      data: {
        // token: '30DE8D620685C4126C33A4D71A9F2F2CD49BC5EA8093A79E0AD2E762BEC435A96B39DE72264700D705A899E01839D4FF3F4634535E54AFEAB25551BD736AA688BFC9F53A87F47720AACF9D7704288AF30105B655CE82C4F4A3661BB4EC9476A0CDBF0D6577ACD32621B880CE8D15B85DC6D64DDCDAABE6667F50D8FC92DE6634C71AD455DA368A338F57F1D82AA4E3663C76683EDB70BCB1A2C42934040A0E272CF2F264F90181C901AC2467878085A8E67D5898CC1749C001F69CEFC19B2F57',
        // phone: '17730127131'
        token: this.$store.state.token,
        phone: this.$store.state.phone
      }
    }).success(data => {
      this.filterData(data)
      console.log(data)
      this.personalDetail = data.MemberInfo
      this.transferInfo = data.TransactionInfo
    }).fail(data => {
    })
  },
  methods: {
    filterData (data) {
      var info = data.MemberInfo
      if (!info.OverdueCount) {
        data.MemberInfo.OverdueCount = '无逾期'
      } else {
        data.MemberInfo.BorrowCount = info.BorrowCount + '笔逾期'
      }
      if (!info.BorrowCount) {
        data.MemberInfo.BorrowCount = '当前无借款'
      } else {
        data.MemberInfo.BorrowCount = info.BorrowCount + '笔'
      }
      data.MemberInfo.RegTime = info.RegTime.substr(0, 10)
      let creditCenter = ''
      let credit = [info.IsIdentityPass, info.IsContactPass, info.IsPhonePass, info.IsZhiMaPass, info.IsBankCardPass]
      let creditArr = ['请认证身份信息', '请认证联系人', '请认证手机号', '请认证银行卡', '请认证芝麻信用']
      for (let i = 0; i < credit.length; i++) {
        if (!credit[i]) {
          creditCenter = creditArr[i]
          break
        } else {
          creditCenter = '已通过认证'
        }
      }
      data.MemberInfo.creditCenter = creditCenter
    },
    back () {
      Router.back()
    },
    tabSwitchHome () {
      this.tabSwitchShow = false
    },
    tabSwitchDeal () {
      this.tabSwitchShow = true
    },
    gotoPage (page) {
      this.$router.push({
        name: page
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./personal-info.scss";
</style>
