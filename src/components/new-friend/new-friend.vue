<template>
  <!-- s 验证消息 -->
  <section class="new-friend padding-top-126 bg-white">
    <TitleComponent :title="title" @OTHER_EVENT="gotoPage('add-friend')" @BACK_EVENT="back"></TitleComponent>
    <ul class="friend-list padding-horizontal-24 bg-white">
      <li class="list-item border-bottom-1">
        <div class="item-portrait">
          <img src="http://iph.href.lu/87x87">
        </div>
        <div class="item-detail">
          <div class="detail-message">
            <p class="message-title">
              <span class="title-name font-27 color-light-blue">借条大师助手</span>
              <span class="title-time font-18 color-light-grey">昨天借条借通过好友搜索添加通过好友搜索添加通过好友搜索添加</span>
            </p>
            <p class="message-tip font-24 color-light-grey">通过好友搜索添加通过好友搜索添加通过好友搜索添加</p>
          </div>
          <div class="detail-right">
            <div class="right-button" v-if="true">
              <button class="button color-white"><div>同意</div></button>
              <button class="button color-white"><div>拒绝</div></button>
            </div>
            <div class="right-status" v-if="false"><span class="font-24 color-light-grey">已同意</span></div>
          </div>
        </div>
      </li>
    </ul>
  </section>
  <!-- e 验证消息 -->
</template>

<script>
// include dependence
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'NewFriendComponent',
  data () {
    return {
      // start params
      'title': {
        contentText: '验证消息',
        rightText: '清空'
      }
      // end params
    }
  },
  components: {
    TitleComponent
    // include components
  },
  methods: {
    back () {},
    gotoPage (page) {
      this.$router.push({
        name: page
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./new-friend.scss";
</style>
