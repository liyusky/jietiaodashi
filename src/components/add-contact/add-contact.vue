<template>
  <!-- s 添加联系人 -->
  <section class="add-contact padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <TipComponent class="contact-tip padding-horizontal-30 font-24" :tip="tip"></TipComponent>
    <ModalComponent>
      <div class="modal-content">
        <div></div>
      </div>
    </ModalComponent>
  </section>
  <!-- e 添加联系人 -->
</template>

<script>
// include dependence
import InputsComponent from '../../module/inputs/inputs.vue'
import ModalComponent from '../../module/modal/modal.vue'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'AddContactComponent',
  data () {
    return {
      // start params
      'inputs': {
        type: 'default / text / slide / icon / switch / center',
        placeholder: '',
        rightText: '',
        rightIcon: '',
        leftText: '',
        leftIcon: '',
        style: 'input类型',
        maxLength: '',
        disabled: '',
        receiveInput: '默认内容'
      },
      'tip': {
        type: 'default',
        content: '借条大师保障您的信息安全。',
        icon: 'chuyin'
      },
      'title': {
        contentText: '添加联系人'
      }
      // end params
    }
  },
  components: {
    InputsComponent,
    ModalComponent,
    TipComponent,
    TitleComponent
    // include components
  },
  methods: {
    // start mutations
    
    // end mutations
  }
}
</script>

<style lang="sass" scoped>
@import "./add-contact.scss";
</style>
