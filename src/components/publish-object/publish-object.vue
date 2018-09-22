<template>
  <!-- s 发布对象 -->
  <section class="publish-object padding-top-126">
    <TitleComponent :title="title" @OTHER_EVENT="confirm"></TitleComponent>
    <div class="object-select bg-white">
      <div class="select-item padding-horizontal-30 border-bottom-1">
        <div class="item-svg">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xunzhaochujieren"></use>
          </svg>
        </div>
        <div class="item-detail">
          <p class="detail-title font-30 color-black">寻找出借人</p>
          <i class="iconfont icon-arrow-right font-27 color-light-grey"></i>
        </div>
      </div>
      <div class="select-item padding-horizontal-30 border-bottom-1">
        <div class="item-svg">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-lishichujieren"></use>
          </svg>
        </div>
        <div class="item-detail">
          <p class="detail-title font-30 color-black">历史出借人</p>
          <i class="iconfont icon-arrow-right font-27 color-light-grey"></i>
        </div>
      </div>
    </div>
    <div class="object-title border-bottom-1">
      <i class="iconfont icon-yuandian font-18 color-blue"></i>
      <span class="font-27 color-deep-grey">我的好友</span>
    </div>
    <div class="object-friend padding-left-30 bg-white">
      <div class="friend-item border-bottom-1" v-for="(item, index) in friendList" :key="index" @click="selectFriend(item, index)">
        <div class="item-portrait">
          <img :src="item.url">
        </div>
        <div class="item-detail padding-horizontal-30">
          <div class="detail-title">
            <p class="font-33 color-black">{{item.Name}}</p>
            <p class="font-27 color-deep-grey"><span>借条ID：</span><span>{{item.UserPhone}}</span></p>
          </div>
          <i class="iconfont icon-gouxuan color-light-grey font-30" :class="{'icon-jindu color-blue': item.checkFriend}"></i>
        </div>
      </div>
    </div>
  </section>
  <!-- e 发布对象 -->
</template>

<script>
// include dependence
import Http from '../../class/Http.class.js'
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
        // {
        //   url: 'http://iph.href.lu/87x87',
        //   phone: '15088845566',
        //   imAccid: '10039004',
        //   userName: '曹俊',
        //   checkFriend: false
        // }
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
    this.init()
    Storage.publishObject = null
  },
  methods: {
    init () {
      Http.send({
        url: 'LendMemberList',
        data: {
          token: Storage.token,
          phone: Storage.phone,
          type: 1
        }
      }).success(data => {
        console.log(data)
        data.list.forEach((ele) => {
          ele.checkFriend = false
        })
        this.friendList = data.list
      }).fail(data => {
      })
    },
    confirm () {
      var selectObject = []
      this.friendList.forEach(ele => {
        if (ele.checkFriend) {
          selectObject.push(ele)
        }
      })
      Storage.publishObject = selectObject
      Router.push('wanna-borrow')
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
