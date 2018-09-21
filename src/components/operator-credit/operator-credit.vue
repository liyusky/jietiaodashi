<template>
  <!-- s 运营商认证 -->
  <section class="operator-credit padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <iframe :src="url" @load="listener"></iframe>
  </section>
  <!-- e 运营商认证 -->
</template>

<script>
// include dependence
import Account from '../../class/Account.class.js'
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'OperatorCreditComponent',
  data () {
    return {
      index: 0,
      url: '',
      // start params
      'title': {
        contentText: '运营商认证'
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
        url: 'PhoneOperatorAuthUrl',
        data: {
          token: Storage.token,
          phone: Storage.phone
        }
      }).success(data => {
        console.log(data)
        this.url = data
      }).fail(data => {
      })
    },
    listener () {
      this.index++
      if (this.index > 2) {
        setTimeout(() => {
          Http.send({
            url: 'CurrentStep',
            data: {
              token: Storage.token,
              phone: Storage.phone
            }
          }).success(data => {
            if (data.IsPhonePass) {
              Router.push('bind-bank-card')
              Account.phone = data.IsPhonePass
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
@import "./operator-credit.scss";
</style>
