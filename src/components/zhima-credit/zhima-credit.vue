<template>
  <!-- s 芝麻认证 -->
  <section class="zhima-credit padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <iframe :src="url" @load="listener"></iframe>
  </section>
  <!-- e 芝麻认证 -->
</template>

<script>
// include dependence
import Account from '../../class/Account.class.js'
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'ZhimaCreditComponent',
  data () {
    return {
      url: '',
      index: 0,
      // start params
      'title': {
        contentText: '芝麻认证'
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
      Http.send({
        url: 'ZhimaAuthUrl',
        data: {
          token: Storage.token,
          phone: Storage.phone
        }
      }).success(data => {
        this.url = data
      }).fail(data => {
      })
    },
    listener () {
      this.index++
      if (this.index > 3) {
        setTimeout(function () {
          Http.send({
            url: 'CurrentStep',
            data: {
              token: Storage.token,
              phone: Storage.phone
            }
          }).success(data => {
            if (data.IsZhiMaPass) {
              Router.push('operator-credit')
              Account.zhima = data.IsZhiMaPass
            } else {
              Router.back()
            }
          }).fail(data => {
            console.log(data)
          })
        }, 3000)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./zhima-credit.scss";
</style>
