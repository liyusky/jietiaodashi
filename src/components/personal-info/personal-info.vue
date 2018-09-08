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
        <!-- <img :src="personalDetail.Photo"> -->
      </div>
      <div class="user-detail">
        <p class="detail-id"><span>借条ID：</span><span>123546</span></p>
        <p class="detail-name">熊大</p>
        <div class="detail-attestation">
          <div class="attestation-item">实名</div>
          <div class="attestation-item">肖像</div>
          <div class="attestation-item">银行卡</div>
        </div>
      </div>
    </div>
    <div class="info-tab">
      <div class="tab-nav">
        <div class="nav-item" :class="{'nav-active': tabSwitchShow}" @click="tabSwitchHome">主页</div>
        <div class="nav-item" :class="{'nav-active': !tabSwitchShow}" @click="tabSwitchDeal">交易</div>
      </div>
      <div class="tab-content">
        <div class="content-home" v-if="tabSwitchShow">
          <ul class="home-list">
            <li class="list-item">
              <div class="item-value">
                <span>进行中的借款</span>
                <span>当前无借款</span>
              </div>
              <i class="iconfont icon-cong"></i>
            </li>
            <li class="list-item">
              <div class="item-value">
                <span>手机号</span>
                <span>15468632154</span>
              </div>
            </li>
            <li class="list-item">
              <div class="item-value">
                <span>注册于</span>
                <span>2017-01-24</span>
              </div>
            </li>
            <li class="list-item">
              <div class="item-value">
                <span>信用记录</span>
                <span>无逾期</span>
              </div>
            </li>
            <li class="list-item">
              <div class="item-value">
                <span>认证中心</span>
                <span>已通过认证</span>
              </div>
              <i class="iconfont icon-cong"></i>
            </li>
          </ul>
        </div>
        <div class="content-deal" v-if="!tabSwitchShow">
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
                  <p>0</p>
                  <p>0</p>
                </div>
              </li>
              <li class="list-item">
                <p class="item-title">当前金额</p>
                <div class="itme-right">
                  <p>0</p>
                  <p>0</p>
                </div>
              </li>
              <li class="list-item">
                <p class="item-title">未偿还金额</p>
                <div class="itme-right">
                  <p>0</p>
                  <p>0</p>
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
                  <p>0</p>
                  <p>0</p>
                </div>
              </li>
              <li class="list-item">
                <p class="item-title">当前金额</p>
                <div class="itme-right">
                  <p>0</p>
                  <p>0</p>
                </div>
              </li>
              <li class="list-item">
                <p class="item-title">未偿还金额</p>
                <div class="itme-right">
                  <p>0</p>
                  <p>0</p>
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
      tabSwitchShow: false
      // start params
      // end params
    }
  },
  components: {
    // include components
  },
  mounted () {
    console.log(3333)
    Http.send({
      url: 'PersonalDetail',
      data: {
        token: '3199E762E297C70F83A68D98A21A3580CCB019E1C2761DCFBF5471CE63EEE2EB5DEE06736F9F7750A4968069DF5280A75ED88218135B0EED2D43230EC9DE3ECD8A3CE84AE359D7EAF3C09C85AB89749ABD6C376146B340D3816F30B5C647C6F8904B15B047D3FE47BB91A665BB75D8EAC26704824C38D55027A26D2910EEF889694257A3B6EE8BF40AD56B8DBC34FA5A1D063FC709177C550A9A9D592BAC07940E4C7A10088352EB07DFA1E941D7452FA3DE886340C106FFE2B54AF2DAA6264F',
        phone: '17730127131'
      }
    }).success(data => {
      console.log(1111)
      this.personalDetail = data.data
      console.log(this.personalDetail)
    }).fail(data => {
    })
    console.log(444)
  },
  methods: {
    back () {
      Router.back()
    },
    tabSwitchHome () {
      this.tabSwitchShow = true
    },
    tabSwitchDeal () {
      this.tabSwitchShow = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./personal-info.scss";
</style>
