<template>
  <!-- s 黑名单 -->
  <section class="black-list padding-top-126 bg-white">
    <TitleComponent :title="title"></TitleComponent>
    <div class="list-item padding-horizontal-30 border-bottom-1" v-for="(item, index) in blacklist" :key="index">
      <img class="item-portrait" src="https://bpic.588ku.com/illus_water_img/18/09/14/b658aea8ef673881994cec643681c640.jpg!/watermark/url/L3dhdGVyL3dhdGVyX2JhY2tfNDAwXzIwMC5wbmc=/repeat/true" @load="getUserInfo(index)">
      <div class="item-detail">
        <p class="font-30 color-black">{{item.name}}</p>
        <button class="detail-btn font-24 color-blue border-radius-12 bg-white" v-if="!item.remove" @click="remove(index)">
          <div>解除黑名单</div>
        </button>
        <p class="font-27 color-light-grey" v-if="item.remove">已移出黑名单</p>
      </div>
    </div>
  </section>
  <!-- e 黑名单 -->
</template>

<script>
// include dependence
import Chat from '../../class/Chat.class.js'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'BlackListComponent',
  data () {
    return {
      blacklist: [],
      // start params
      'title': {
        contentText: '黑名单'
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
  },
  methods: {
    init () {
      Chat.getBlacklist().success(blacklist => {
        delete blacklist.invalid
        blacklist.forEach(item => {
          console.log(item)
          this.blacklist.push({
            name: '',
            mark: false,
            remove: false,
            account: item.account
          })
          console.log(this.blacklist)
        })
      })
    },
    getUserInfo (index) {
      let item = this.blacklist[index]
      if (item.mark || !item.account) return
      Chat.getUserInfo(item.account).success(info => {
        this.blacklist[index] = {
          name: info.nick,
          mark: true,
          remove: item.remove,
          account: item.account
        }
        let arr = []
        this.blacklist.forEach(unit => {
          arr.push(unit)
        })
        this.blacklist = arr
      })
    },
    remove (index) {
      let item = this.blacklist[index]
      Chat.removeBlack = item.account
      this.blacklist[index].remove = true
      let arr = []
      this.blacklist.forEach(unit => {
        arr.push(unit)
      })
      this.blacklist = arr
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./black-list.scss";
</style>
