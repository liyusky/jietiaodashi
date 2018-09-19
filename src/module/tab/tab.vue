<template>
  <section class="tab">
    <!-- s 底部导航 -->
    <nav class="tab">
      <div class="tab-item" @click="gotoPage('index')">
        <svg class="icon" aria-hidden="true" v-if="path === '/index' || path === '/'">
          <use xlink:href="#icon-chuyin"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-if="path !== '/index' && path !== '/'">
          <use xlink:href="#icon-jianyu"></use>
        </svg>
        <p class="item-name" :class="{active: path === '/index' || path === '/'}">首页</p>
      </div>
      <div class="tab-item" @click="gotoPage('message')">
        <svg class="icon" aria-hidden="true" v-if="path === '/message'">
          <use xlink:href="#icon-chuyin"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-if="path !== '/message'">
          <use xlink:href="#icon-jianyu"></use>
        </svg>
        <p class="item-name" :class="{active: path === '/message'}">消息</p>
      </div>
      <div class="tab-item" @click="gotoBorrow('wanna-borrow')">
        <svg class="icon" aria-hidden="true" v-if="path === '/wanna-borrow'">
          <use xlink:href="#icon-chuyin"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-if="path !== '/wanna-borrow'">
          <use xlink:href="#icon-jianyu"></use>
        </svg>
        <p class="item-name" :class="{active: path === '/wanna-borrow'}">我要借</p>
      </div>
      <div class="tab-item" @click="gotoPage('find')">
        <svg class="icon" aria-hidden="true" v-if="path === '/find'">
          <use xlink:href="#icon-chuyin"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-if="path !== '/find'">
          <use xlink:href="#icon-jianyu"></use>
        </svg>
        <p class="item-name" :class="{active: path === '/find'}">发现</p>
      </div>
      <div class="tab-item" @click="gotoPage('mine')">
        <svg class="icon" aria-hidden="true" v-if="path === '/mine'">
          <use xlink:href="#icon-chuyin"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-if="path !== '/mine'">
          <use xlink:href="#icon-jianyu"></use>
        </svg>
        <p class="item-name" :class="{active: path === '/mine'}">我的</p>
      </div>
    </nav>
    <!-- e 底部导航 -->
  </section>
</template>

<script>
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
export default {
  name: 'TabComponent',
  props: ['path'],
  data () {
    return {
      // tabPath: '/index'
    }
  },
  methods: {
    gotoPage (page) {
      Router.push(page)
    },
    gotoBorrow (page) {
      Http.send({
        url: 'IsLoan',
        data: {
          token: Storage.token,
          phone: Storage.phone
        }
      }).success(data => {
        Router.push(page)
      }).fail(data => {
        alert(data.message)
      })
    }
  }
}

</script>

<style lang="sass" scoped>
  @import "./tab.scss";

</style>
