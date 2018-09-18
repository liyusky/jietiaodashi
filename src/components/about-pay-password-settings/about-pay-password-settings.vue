<template>
  <!-- s 支付密码设置 -->
  <section class="about-pay-password-settings padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <div class="settings-billboard margin-top-30 padding-left-30 bg-white">
      <BillboardComponent class="billboard-item padding-right-30 border-bottom-1" :billboard="item" v-for="(item, index) in billboard" :key="index" @OPERATION_EVENT="target"></BillboardComponent>
    </div>
    <!-- <KeyboardComponent></KeyboardComponent> -->
  </section>
  <!-- e 支付密码设置 -->
</template>

<script>
// include dependence
import Router from '../../class/Router.class.js'
import BillboardComponent from '../../module/billboard/billboard.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'AboutPayPasswordSettingsComponent',
  data () {
    return {
      // start params
      'billboard': [
        {
          type: 'guide',
          key: '修改支付密码',
          icon: 'chuyin',
          target: 'modefy-pay-password'
        },
        {
          type: 'guide',
          key: '忘记支付密码',
          icon: 'chuyin',
          target: 'identity-verification'
        }
      ],
      'title': {
        contentText: '支付密码设置'
      }
      // end params
    }
  },
  components: {
    BillboardComponent,
    TitleComponent
    // include components
  },
  methods: {
    target (page) {
      Router.push(page)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./about-pay-password-settings.scss";
</style>
