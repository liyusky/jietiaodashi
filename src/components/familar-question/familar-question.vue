<template>
  <!-- s 常见问题 -->
  <section class="familar-question">
    <TitleComponent :title="title" @BACK_EVENT="backPage"></TitleComponent>
    <ul class="question-list">
      <li class="list-item" v-for="(item, index) in 5" :key="index">
        <div class="item-title"  @click="switchText(index)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jianyu"></use>
          </svg>
          <p>如何修改登录密码</p>
          <i class="iconfont icon-cong"></i>
        </div>
        <div class="item-text" :class="{'text-active': textIndex === index && textShow}">
          <p class="text-title">修改登录密码</p>
          <p>在“登录页点击“忘记密码”，输入注册手机号码，系统将发送验证码到注册手机号码上。填入验证码，点击“下一步”,再重新设置登录密码。</p>
        </div>
      </li>
    </ul>
  </section>
  <!-- e 常见问题 -->
</template>

<script>
// include dependence
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'FamilarQuestionComponent',
  data () {
    return {
      textShow: false,
      textIndex: null,
      // start params
      'title': {
        contentText: '常见问题',
        icon: 'cong'
      }
      // end params
    }
  },
  components: {
    TitleComponent
    // include components
  },
  methods: {
    switchText (index) {
      if (this.textIndex === index) {
        if (!this.textShow) {
          this.textShow = true
          return
        }
        this.textShow = false
        return
      }
      this.textIndex = index
      this.textShow = true
    },
    backPage () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./familar-question.scss";
</style>
