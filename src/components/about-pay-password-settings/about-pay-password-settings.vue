<template>
  <!-- s 支付密码设置 -->
  <section class="about-pay-password-settings">
    <TitleComponent :title="title"></TitleComponent>
    <BillboardListComponent class="settings-billboard margin-top-30 padding-left-30 bg-write" :billboardList="billboardList"></BillboardListComponent>
  </section>
  <!-- e 支付密码设置 -->
</template>

<script>
// include dependence
import BillboardListComponent from '../../module/billboard-list/billboard-list.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'AboutPayPasswordSettingsComponent',
  data () {
    return {
      // start params
      'billboardList': [
        {
          type: 'guide',
          key: '修改支付密码',
          icon: 'chuyin',
          target: ''
        },
        {
          type: 'guide',
          key: '忘记支付密码',
          icon: 'chuyin',
          target: ''
        }
      ],
      'title': {
        contentText: '支付密码设置'
      }
      // end params
    }
  },
  components: {
    BillboardListComponent,
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./about-pay-password-settings.scss";
</style>
