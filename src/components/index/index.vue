<template>
  <!-- s  -->
  <section class="index">
    <InputsComponent :inputs="inputs" v-show="modalShow" @OPEN_MODAL_EVENT="openModal"></InputsComponent>
  </section>
  <!-- e  -->
</template>

<script>
import InputsComponent from '../../module/inputs/inputs.vue'

export default {
  name: 'IndexComponent',
  data () {
    return {
      inputs: {
        // type: 'text',
        // type: 'sides',
        type: 'center',
        leftText: '开户地区',
        placeholder: '请输入手机验证码',
        leftIcon: '',
        selcetText: '',
        rightText: '发送验证码',
        centerText: 'jfjalfdjjfks'
        // rightIcon: 'icon-arrow-right'
      },
      modalShow: true
    }
  },
  methods: {
    openModal () {
      this.inputs.selcetText = '合肥支行'
    },
    closeModal () {
      this.modalShow = false
    }
  },
  components: {
    InputsComponent
  }
}
</script>

<style lang="sass" scoped>
@import "./index.scss";
</style>
