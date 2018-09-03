<template>
  <!-- s 消息 -->
  <section class="message">
    <div class="message-header font-30 color-white">
      <p>最近消息</p>
      <i class="iconfont icon-cong"></i>
    </div>
    <div class="message-search font-24 border-bottom-1">
      <div class="search-content">
        <i class="iconfont icon-cong"></i>
        <span>搜索手机号</span>
      </div>
    </div>
    <ul class="message-list">
      <li class="list-item"></li>
    </ul>
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
  }
}
</script>

<style lang="sass" scoped>
@import "./message.scss";
</style>
