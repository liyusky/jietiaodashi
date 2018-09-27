<template>
  <!-- s 好友 -->
  <section class="friends padding-top-126">
    <TitleComponent :title="title" @OTHER_EVENT="confirm" @BACK_EVENT="back"></TitleComponent>
    <div class="friends-search padding-horizontal-30 font-24" @click="gotoPage('search-friend')">
      <div class="search-content">
        <i class="iconfont icon-cong"></i>
        <span>搜索手机号</span>
      </div>
    </div>
    <div class="friends-new bg-white padding-horizontal-30" @click="gotoPage('new-friend')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cong"></use>
      </svg>
      <p class="font-30 color-black">新的好友</p>
    </div>
    <ul class="friends-list padding-horizontal-30 bg-white">
      <li class="list-item border-bottom-1">
        <div class="item-portrait">
          <img src="http://iph.href.lu/87x87">
        </div>
        <div class="item-detail padding-horizontal-30">
          <p class="font-30 color-blue">
            <span>借条大师助手</span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-cong"></use>
            </svg>
          </p>
          <p class="font-27 color-deep-grey"><span>借条ID：</span><span>121634546</span></p>
        </div>
      </li>
    </ul>
  </section>
  <!-- e 好友 -->
</template>

<script>
// include dependence
import Router from '../../class/Router.class.js'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'FriendsComponent',
  data () {
    return {
      // start params
      'title': {
        contentText: '好友',
        icon: 'iahaoyou'
      }
      // end params
    }
  },
  components: {
    TitleComponent
    // include components
  },
  methods: {
    confirm () {},
    back () {},
    gotoPage (page) {
      Router.push(page)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./friends.scss";
</style>
