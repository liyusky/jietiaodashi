<template>
  <!-- s  首页-->
  <section class="index">
    <header class="index-header">
      <div class="swiper-container banner" id="banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in bannerList" :key="index">
            <img :src="item.url">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="header-list padding-horizontal-21">
        <div class="list-search padding-horizontal-30">
          <i class="iconfont icon-cong font-27 color-white"></i>
          <input type="text" placeholder="搜索你认识的好友">
        </div>
        <div class="list-item">
          <i class="iconfont icon-cong"></i>
          <p>通讯录</p>
        </div>
        <div class="list-item">
          <i class="iconfont icon-cong"></i>
          <p>加好友</p>
        </div>
      </div>
    </header>
    <nav class="index-nav">
      <div class="nav-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cong"></use>
        </svg>
        <p>找出借人</p>
      </div>
      <div class="nav-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cong"></use>
        </svg>
        <p>贷款超市</p>
      </div>
      <div class="nav-item" @click="gotoPage('iou-center')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cong"></use>
        </svg>
        <p>借条中心</p>
      </div>
      <div class="nav-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cong"></use>
        </svg>
        <p>失信查询</p>
      </div>
      <div class="nav-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cong"></use>
        </svg>
        <p>仲裁进度</p>
      </div>
      <div class="nav-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cong"></use>
        </svg>
        <p>在线客服</p>
      </div>
      <div class="nav-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cong"></use>
        </svg>
        <p>我要投诉</p>
      </div>
      <div class="nav-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cong"></use>
        </svg>
        <p>催收保障</p>
      </div>
    </nav>
    <div class="index-message">
      <div class="message-left">
        <img src="https://api.vtrois.com/image/123x30">
      </div>
      <div class="message-right">
        <div class="swiper-container broad" id="broad">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in broadList" :key="index">
              <p>{{item.title}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-activity">
      <div class="activity-find">
        <img src="https://api.vtrois.com/image/750x180">
      </div>
      <div class="activity-invite">
        <img src="https://api.vtrois.com/image/750x160">
      </div>
    </div>
    <!-- <TabComponent></TabComponent> -->
  </section>
  <!-- e  首页-->
</template>

<script>
import Swiper from 'Swiper'
// include dependence
import Http from '../../../class/Http.class.js'
import Router from '../../../class/Router.class.js'
import Storage from '../../../class/Storage.class.js'
export default {
  name: 'IndexComponent',
  data () {
    return {
      bannerList: [],
      broadList: [],
      share: {}
      // start    params
      // end params
    }
  },
  components: {
    // TabComponent
  },
  created () {
    Http.send({
      url: 'Index',
      data: {
        token: Storage.token,
        userPhone: Storage.phone
      }
    }).success(data => {
      this.bannerList = data.bannerList
      this.broadList = data.broadList
      this.share = data.share
    }).fail(data => {
      console.log(data)
    })
  },
  mounted () {
    // 轮播图
    this.$nextTick(function () {
      /* eslint-disable no-new */
      new Swiper('.banner', {
        autoplay: {
          delay: 2000
        },
        loop: true,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          longSwipesRatio: 0.3,
          clickable: true
        },
        observer: true,
        observeParents: true
      })
      /* eslint-disable no-new */
      new Swiper('.broad', {
        loop: true,
        direction: 'vertical',
        autoplay: {
          delay: 2000
        },
        observer: true,
        observeParents: true
      })
    })
  },
  methods: {
    gotoPage (page) {
      Router.push(page)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./index.scss";
</style>
