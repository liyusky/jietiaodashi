<template>
  <!-- s 消息 -->
  <section class="message">
    <div class="message-header font-30 color-white">
      <p>最近消息</p>
      <i class="iconfont icon-jiahao" @click="openModal"></i>
    </div>
    <div class="message-content">
      <div class="content-search padding-horizontal-30 font-24 border-bottom-1" @click="gotoPage('search-friend')">
        <div class="search-content">
          <i class="iconfont icon-sousuo"></i>
          <span class="font-30 color-balck">搜索手机号</span>
        </div>
      </div>
      <ul class="content-list padding-horizontal-30">
        <li class="list-item border-bottom-1" v-for="(item, index) in sessions" :key="index" @click="gotoChat(index, item.to, item.id, item.portrait)">
          <div class="item-portrait">
            <img :src="item.portrait">
          </div>
          <div class="item-message padding-horizontal-30">
            <div class="message-title">
              <p class="font-27 color-light-blue">
                <span>{{item.name}}</span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-cong"></use>
                </svg>
              </p>
              <p class="font-18 color-light-grey">昨天</p>
            </div>
            <div class="message-recently">
              <p class="recently-newest  font-24 color-light-grey">{{item.lastMsg.text}}</p>
              <div class="recently-badge" v-if="item.unread"><span class="color-white font-21">{{item.unread}}</span></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <ModalComponent v-show="modalShow" @CLOSE_EVENT="closeModal">
      <MoreComponent></MoreComponent>
    </ModalComponent>
  </section>
  <!-- e 消息 -->
</template>

<script>
import MoreComponent from './more/more.vue'
// include dependence
import Chat from '../../../class/Chat.class.js'
import Router from '../../../class/Router.class.js'
import Storage from '../../../class/Storage.class.js'
import ModalComponent from '../../../module/modal/modal.vue'
export default {
  name: 'MessageComponent',
  data () {
    return {
      sessions: [],
      updatesession: {},
      modalShow: false
      // start params
      // end params
    }
  },
  components: {
    ModalComponent,
    MoreComponent
    // TabComponent
    // include components
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      if (!Storage.sessions) return
      Storage.sessions.forEach(item => {
        Chat.getUserInfo(item.to).success(data => {
          item.portrait = data.avatar ? data.avatar : '../../../../static/img/master.png'
          item.name = data.nick ? data.nick : data.account
        })
        if (!this.$store.state.updatesession) return
        if (item.to === this.$store.state.updatesession.to) {
          item.lastMsg = this.$store.state.updatesession.lastMsg
          item.unread = this.$store.state.updatesession.unread
        }
      })
      this.sessions = Storage.sessions
      console.log(this.sessions)
    },
    openModal () {
      this.modalShow = true
    },
    closeModal () {
      this.modalShow = false
    },
    gotoChat (index, id, sessionId, portrait) {
      Chat.sessionUnread(sessionId)
      Chat.target = {
        id: id,
        portrait: portrait
      }
      Router.push('chat')
    },
    gotoPage (page) {
      Router.push(page)
    }
  },
  watch: {
    '$store.state.updatesession': function (updatesession) {
      this.sessions.forEach(item => {
        if (item.to === updatesession.to) {
          item.lastMsg = updatesession.lastMsg
          item.unread = updatesession.unread
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./messages.scss";
</style>
