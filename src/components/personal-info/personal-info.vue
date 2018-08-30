<template>
  <!-- s 个人信息 -->
  <section class="personal-info">
    <div class="info-header">
      <div class="header">
        <i class="iconfont icon-cong" @click="back"></i>
        <span>个人资料</span>
        <i class="iconfont icon-cong"></i>
      </div>
    </div>
    <div class="info-user">
      <div class="user-portrait">
        <img src="https://api.vtrois.com/image/150x150">
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
export default {
  name: 'PersonalInfoComponent',
  data () {
    return {
      tabSwitchShow: false
      // start params
      // end params
    }
  },
  components: {
    // include components
  },
  methods: {
    back () {
      this.$router.back(-1)
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
