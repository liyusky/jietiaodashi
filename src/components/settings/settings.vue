<template>
  <!-- s 设置 -->
  <section class="settings padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <BillboardListComponent class="settings-billboard margin-top-30 padding-left-30 bg-white" :billboardList="billboardList"></BillboardListComponent>
    <ButtonComponent class="margin-top-30" :button="button"></ButtonComponent>
  </section>
  <!-- e 设置 -->
</template>

<script>
// include dependence
import BillboardListComponent from '../../module/billboard-list/billboard-list.vue'
import ButtonComponent from '../../module/button/button.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'SettingsComponent',
  data () {
    return {
      // start params
      'billboardList': [
        {
          type: 'guide',
          key: '支付设置',
          icon: 'chuyin',
          target: ''
        },
        {
          type: 'guide',
          key: '提现密码重置',
          icon: 'chuyin',
          target: ''
        },
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
          target: ''
        },
        {
          type: 'guide',
          key: '意见反馈',
          icon: 'chuyin',
          target: ''
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
    BillboardListComponent,
    ButtonComponent,
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./settings.scss";
</style>
