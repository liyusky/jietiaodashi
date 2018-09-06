<template>
  <!-- s 搜索好友 -->
  <section class="search-friend">
    <div class="friend-header border-bottom-1">
      <div class="header-title padding-horizontal-30">
        <i class="iconfont icon-cong font-30"></i>
        <div class="header-search">
          <input type="text" v-model="phoneNumber" placeholder="搜索手机号">
          <i class="iconfont icon-cong font-27" @click="clearInput"></i>
        </div>
        <button class="button bg-white font-30 color-black" @click="searchFriend"><div>{{searchBtnName}}</div></button>
      </div>
    </div>
    <div class="friend-content">
      <div class="content-item padding-horizontal-30" v-if="searchFriendData" @click="gotoPage">
        <div class="item-portrait">
          <img src="http://iph.href.lu/87x87">
        </div>
        <p class="item-name font-30 color-black">名字</p>
        <button class="button padding-horizontal-24 color-white font-24" :disabled="addDisabled" @click="addFriedn"><div>{{buttonText}}</div></button>
      </div>
      <div class="content-without" v-if="!searchFriendData">
        <div class="without-img">
          <img src="http://iph.href.lu/120x150">
        </div>
        <p class="font-24 color-light-grey">暂无数据信息</p>
      </div>
    </div>
  </section>
  <!-- e 搜索好友 -->
</template>

<script>
// include dependence
export default {
  name: 'SearchFriendComponent',
  data () {
    return {
      phoneNumber: '',
      buttonText: '添加好友',
      addDisabled: false,
      searchFriendData: null,
      searchBtnName: '取消'
      // start params
      // end params
    }
  },
  components: {
    // include components
  },
  methods: {
    clearInput () {
      if (!this.phoneNumber) return
      this.phoneNumber = ''
    },
    searchFriend () {
      // if (!this.phoneNumber) return
    },
    addFriedn () {
      this.buttonText = '已发送'
      this.addDisabled = true
    },
    gotoPage () {}
  }
}
</script>

<style lang="sass" scoped>
@import "./search-friend.scss";
</style>
