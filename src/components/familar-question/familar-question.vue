<template>
  <!-- s 常见问题 -->
  <section class="familar-question">
    <TitleComponent :title="title"></TitleComponent>
    <ul class="question-list">
      <li class="list-item">
        <div class="item-title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jianyu"></use>
          </svg>
          <h3>如何修改登录密码</h3>
        </div>
        <div class="item-text">
          <p>在“我的-设置-支付密码”，输入原来密码验证身份，再设置新的支付密码</p>
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
  }
}
</script>

<style lang="sass" scoped>
@import "./familar-question.scss";
</style>
