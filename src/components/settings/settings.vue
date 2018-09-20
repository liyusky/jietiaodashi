<template>
  <!-- s 设置 -->
  <section class="settings padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <div class="settings-billboard margin-top-30 padding-left-30 bg-white">
      <BillboardComponent class="billboard-item padding-right-30 border-bottom-1" :billboard="item" v-for="(item, index) in billboard" :key="index" @OPERATION_EVENT="target"></BillboardComponent>
    </div>
    <ButtonComponent class="margin-top-30" :button="button" @SUBMIT_EVENT="logout"></ButtonComponent>
  </section>
  <!-- e 设置 -->
</template>

<script>
// include dependence
import Account from '../../class/Account.class.js'
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import BillboardComponent from '../../module/billboard/billboard.vue'
import ButtonComponent from '../../module/button/button.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'SettingsComponent',
  data () {
    return {
      // start params
      'billboard': [
        {
          type: 'guide',
          key: '了解我们',
          icon: 'chuyin',
          target: ''
        },
        {
          type: 'guide',
          key: '黑名单',
          icon: 'chuyin',
          target: 'black-list'
        },
        {
          type: 'guide',
          key: '意见反馈',
          icon: 'chuyin',
          target: 'feedback'
        }
      ],
      'button': {
        default: [{
          type: 'wran',
          text: '安全退出'
        }]
      },
      'title': {
        contentText: '设置'
      }
      // end params
    }
  },
  components: {
    BillboardComponent,
    ButtonComponent,
    TitleComponent
    // include components
  },
  methods: {
    init () {
      if (Account.bank) {
        this.billboard = [
          {
            type: 'guide',
            key: '支付设置',
            icon: 'chuyin',
            target: 'about-pay-password-settings'
          },
          {
            type: 'guide',
            key: '提现密码重置',
            icon: 'chuyin',
            target: ''
          },
          ...this.billboard
        ]
      }
    },
    target (page) {
      Router.push(page)
    },
    logout () {
      Http.send({
        url: 'UserLogout',
        data: {
          phone: Storage.phone
        }
      }).success(data => {
      }).fail(data => {
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./settings.scss";
</style>
