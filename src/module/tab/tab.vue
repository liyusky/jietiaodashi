<template>
  <section class="tab">
    <!-- s 底部导航 -->
    <nav class="tab">
      <div class="tab-item" @click="gotoPage('index')">
        <svg class="icon" aria-hidden="true" v-if="tabPath === 'index'">
          <use xlink:href="#icon-chuyin"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-if="tabPath !== 'index'">
          <use xlink:href="#icon-jianyu"></use>
        </svg>
        <p class="item-name">首页</p>
      </div>
      <div class="tab-item" @click="gotoPage('friend')">
        <svg class="icon" aria-hidden="true" v-if="tabPath === 'friend'">
          <use xlink:href="#icon-chuyin"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-if="tabPath !== 'friend'">
          <use xlink:href="#icon-jianyu"></use>
        </svg>
        <p class="item-name">好友</p>
      </div>
      <div class="tab-item" @click="gotoPage('borrow')">
        <svg class="icon" aria-hidden="true" v-if="tabPath === 'borrow'">
          <use xlink:href="#icon-chuyin"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-if="tabPath !== 'borrow'">
          <use xlink:href="#icon-jianyu"></use>
        </svg>
        <p class="item-name">我要借</p>
      </div>
      <div class="tab-item" @click="gotoPage('find')">
        <svg class="icon" aria-hidden="true" v-if="tabPath === 'find'">
          <use xlink:href="#icon-chuyin"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-if="tabPath !== 'find'">
          <use xlink:href="#icon-jianyu"></use>
        </svg>
        <p class="item-name">发现</p>
      </div>
      <div class="tab-item" @click="gotoPage('mine')">
        <svg class="icon" aria-hidden="true" v-if="tabPath === 'mine'">
          <use xlink:href="#icon-chuyin"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-if="tabPath !== 'mine'">
          <use xlink:href="#icon-jianyu"></use>
        </svg>
        <p class="item-name">我的</p>
      </div>
    </nav>
    <!-- e 底部导航 -->
  </section>
</template>

<script>
export default {
  name: 'TabComponent',
  data () {
    return {
      tabPath: 'index'
    }
  },
  methods: {
    gotoPage (page) {
      this.tabPath = page
      this.$router.push({name: page})
    }
  }
}

</script>

<style lang="sass" scoped>
  @import "./tab.scss";

</style>
