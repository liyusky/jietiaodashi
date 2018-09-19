<template>
  <!-- s 发布对象 -->
  <section class="publish-object padding-top-126">
    <TitleComponent :title="title" @OTHER_EVENT="confirm"></TitleComponent>
    <div class="object-select bg-white">
      <div class="select-item padding-horizontal-30 border-bottom-1">
        <div class="item-svg">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cong"></use>
          </svg>
        </div>
        <div class="item-detail">
          <p class="detail-title font-30 color-black">寻找出借人</p>
          <i class="iconfont icon-cong font-27 color-light-grey"></i>
        </div>
      </div>
      <div class="select-item padding-horizontal-30 border-bottom-1">
        <div class="item-svg">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cong"></use>
          </svg>
        </div>
        <div class="item-detail">
          <p class="detail-title font-30 color-black">寻找出借人</p>
          <i class="iconfont icon-cong font-27 color-light-grey"></i>
        </div>
      </div>
    </div>
    <div class="object-title border-bottom-1">
      <i class="iconfont icon-cong font-12 color-blue"></i>
      <span class="font-27 color-deep-grey">我的好友</span>
    </div>
    <div class="object-friend padding-left-30 bg-white">
      <div class="friend-item border-bottom-1" v-for="(item, index) in friendList" :key="index" @click="selectFriend(item, index)">
        <div class="item-portrait">
          <img :src="item.url">
        </div>
        <div class="item-detail padding-horizontal-30">
          <div class="detail-title">
            <p class="font-33 color-black">{{item.userName}}</p>
            <p class="font-27 color-deep-grey"><span>借条ID：</span><span>{{item.phone}}</span></p>
          </div>
          <i class="iconfont icon-cong font-30" :class="{'icon-jianyu': item.checkFriend}"></i>
        </div>
      </div>
    </div>
  </section>
  <!-- e 发布对象 -->
</template>

<script>
// include dependence
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'PublishObjectComponent',
  data () {
    return {
      selectIndex: null,
      selectShow: false,
      friendList: [
        {
          url: 'http://iph.href.lu/87x87',
          phone: '17764532154',
          imAccid: '1546347878',
          userName: '你好',
          checkFriend: false
        },
        {
          url: 'http://iph.href.lu/87x87',
          phone: '17764532154',
          imAccid: '1546347878',
          userName: '你好',
          checkFriend: false
        },
        {
          url: 'http://iph.href.lu/87x87',
          phone: '17764532154',
          imAccid: '1546347878',
          userName: '你好',
          checkFriend: false
        },
        {
          url: 'http://iph.href.lu/87x87',
          phone: '17764532154',
          imAccid: '1546347878',
          userName: '你好',
          checkFriend: false
        },
        {
          url: 'http://iph.href.lu/87x87',
          phone: '17764532154',
          imAccid: '1546347878',
          userName: '你好',
          checkFriend: false
        },
        {
          url: 'http://iph.href.lu/87x87',
          phone: '17764532154',
          imAccid: '1546347878',
          userName: '你好',
          checkFriend: false
        }
      ],
      // start params
      'title': {
        contentText: '发布对象',
        rightText: '确定'
      }
      // end params
    }
  },
  components: {
    TitleComponent
    // include components
  },
  created () {
    Storage.publishObject = null
  },
  methods: {
    confirm () {
      var selectObject = []
      this.friendList.forEach(ele => {
        if (ele.checkFriend) {
          selectObject.push(ele)
        }
      })
      Storage.publishObject = selectObject
      this.$router.push({
        name: 'wanna-borrow'
      })
      // Router.push('wanna-borrow')
    },
    selectFriend (item, index) {
      this.friendList[index].checkFriend = !this.friendList[index].checkFriend
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./publish-object.scss";
</style>
