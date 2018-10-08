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
        <li class="list-item border-bottom-1" @click="gotoPage('chat', '13955131374', 'http://img1.imgtn.bdimg.com/it/u=2086972466,4153089489&fm=26&gp=0.jpg')">
          <div class="item-portrait">
            <img src="../../../assets/images/master.png">
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
import ModalComponent from '../../../module/modal/modal.vue'
export default {
  name: 'MessageComponent',
  data () {
    return {
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
  created () {},
  methods: {
    init () {
      Chat.localSessions().success(sessions => {
        console.log(sessions)
      })
    },
    openModal () {
      this.modalShow = true
    },
    closeModal () {
      this.modalShow = false
    },
    gotoPage (page, id, portrait) {
      Chat.target = {
        id: id,
        portrait: portrait
      }
      Router.push(page)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./message.scss";
</style>
