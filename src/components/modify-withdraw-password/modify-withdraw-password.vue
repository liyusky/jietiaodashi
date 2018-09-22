<template>
  <!-- s  -->
  <section class="modify-withdraw-password padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
  </section>
  <!-- e  -->
</template>

<script>
// include dependence
import BM from '../../class/BM.class.js'
import Storage from '../../class/Storage.class.js'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'ModifyWithdrawPasswordComponent',
  data () {
    return {
      // start params
      'title': {
        contentText: '提现密码重置'
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
      BM.send({
        url: 'appResetPassWord',
        data: {
          zh: Storage.phone,
          busi_tp: 3
        }
      }).success(data => {
        document.getElementById('iframe').innerHTML = data
        document.forwardForm.submit()
      }).fail(data => {
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./modify-withdraw-password.scss";
</style>
