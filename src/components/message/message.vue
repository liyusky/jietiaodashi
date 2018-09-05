<template>
  <!-- s 消息 -->
  <section class="message">
    <div class="message-header font-30 color-white">
      <p>最近消息</p>
      <i class="iconfont icon-cong"></i>
    </div>
    <div class="message-content">
      <div class="content-search padding-horizontal-30 font-24 border-bottom-1" @click="gotoPage('search-friend')">
        <div class="search-content">
          <i class="iconfont icon-cong"></i>
          <span>搜索手机号</span>
        </div>
      </div>
      <ul class="content-list padding-horizontal-30">
        <li class="list-item border-bottom-1" v-for="(item, index) in 10" :key="index">
          <div class="item-portrait">
            <img src="http://iph.href.lu/87x87">
          </div>
          <div class="item-message padding-horizontal-30">
            <div class="message-title">
              <p class="font-27 color-light-blue">
                <span>借条大师助手</span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-cong"></use>
                </svg>
              </p>
              <p class="font-18 color-light-grey">昨天</p>
            </div>
            <div class="font-24 color-light-grey">[消息]</div>
          </div>
        </li>
      </ul>
    </div>
    <TabComponent></TabComponent>
  </section>
  <!-- e 消息 -->
</template>

<script>
// include dependence
import TabComponent from '../../module/tab/tab.vue'
export default {
  name: 'MessageComponent',
  data () {
    return {
      // start params
      'tab': ''
      // end params
    }
  },
  components: {
    TabComponent
    // include components
  },
  methods: {
    gotoPage (page) {
      this.$router.push({
        name: page
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./message.scss";
</style>
