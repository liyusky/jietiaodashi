<template>
  <!-- s  -->
  <section class="button" :class="button.type">
    <button v-if="button.firstName" @click="firstSubmit"><div>{{button.firstName}}</div></button>
    <button v-if="button.secondName" @click="secondSubmit"><div>{{button.secondName}}</div></button>
  </section>
  <!-- e  -->
</template>

<script>
// button: {
// type: 'default': 默认样式 /'full': 满屏 'inverse': 白底蓝框 / 'group-dafault': 多个默认 /'group-other'
// firstName: ''  按钮名字
// secondName: ''  按钮名字
// }
export default {
  name: 'ButtonComponent',
  props: ['button'],
  data () {
    return {}
  },
  methods: {
    firstSubmit () {
      this.$emit('FIRST_SUBMIT_EVENT')
    },
    secondSubmit () {
      this.$emit('SECOND_SUBMIT_EVENT')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./button.scss";
</style>
