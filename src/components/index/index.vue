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
        type: 'sides',
        contentText: '开户地区',
        placeholder: '选择开户地区',
        icon: '',
        selcetText: '',
        leftText: '天'
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
