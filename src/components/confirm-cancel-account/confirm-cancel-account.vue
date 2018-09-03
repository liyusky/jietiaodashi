<template>
  <!-- s 确认销账 -->
  <section class="confirm-cancel-account  padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <div class="account-board bg-blue color-white">
      <p>100.00</p>
      <p class="font-27">销账后，你对其收款将减少10.02元</p>
    </div>
    <div class="account-detail-list bg-white border-bottom-1 padding-horizontal-30">
      <DetailListComponent :detailList="detailList"></DetailListComponent>
    </div>
    <div class="account-button">
      <ButtonComponent :button="button"></ButtonComponent>
    </div>
  </section>
  <!-- e 确认销账 -->
</template>

<script>
// include dependence
import ButtonComponent from '../../module/button/button.vue'
import DetailListComponent from '../../module/detail-list/detail-list.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'ConfirmCancelAccountComponent',
  data () {
    return {
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '确认销账'
        }]
      },
      'detailList': [
        {
          type: 'default',
          key: '销账金额',
          value: '其他方式付款'
        },
        {
          type: 'default',
          key: '剩余应收款',
          value: '0.00'
        }
      ],
      'title': {
        contentText: '确认销账'
      }
      // end params
    }
  },
  components: {
    TitleComponent,
    ButtonComponent,
    DetailListComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./confirm-cancel-account.scss";
</style>
