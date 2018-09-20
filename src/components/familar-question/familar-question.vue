<template>
  <!-- s 常见问题 -->
  <section class="familar-question">
    <TitleComponent :title="title"></TitleComponent>
    <ul class="question-list">
      <li class="list-item" v-for="(item, index) in questionList" :key="index">
        <div class="item-title"  @click="switchText(index)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-Q"></use>
          </svg>
          <p>{{item.question}}</p>
          <i class="iconfont icon-arrow-bottom" :class="{active: item.check}"></i>
        </div>
        <div class="item-text" :class="{'text-active': item.check}">
          <p class="text-title" v-if="item.title">{{item.title}}</p>
          <p>{{item.text}}</p>
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
      questionList: [
        {
          question: '如何修改登录密码',
          title: '修改登录密码',
          text: '在“登录页点击“忘记密码”，输入注册手机号码，系统将发送验证码到注册手机号码上。填入验证码，点击“下一步”,再重新设置登录密码。',
          check: false
        },
        {
          question: '如何修改登录密码',
          title: '修改登录密码',
          text: '在“登录页点击“忘记密码”，输入注册手机号码，系统将发送验证码到注册手机号码上。填入验证码，点击“下一步”,再重新设置登录密码。',
          check: false
        },
        {
          question: '如何修改登录密码',
          title: '',
          text: '在“登录页点击“忘记密码”，输入注册手机号码，系统将发送验证码到注册手机号码上。填入验证码，点击“下一步”,再重新设置登录密码。',
          check: false
        },
        {
          question: '如何修改登录密码',
          title: '',
          text: '在“登录页点击“忘记密码”，输入注册手机号码，系统将发送验证码到注册手机号码上。填入验证码，点击“下一步”,再重新设置登录密码。',
          check: false
        }
      ],
      // start params
      'title': {
        contentText: '常见问题'
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
      this.questionList[index].check = !this.questionList[index].check
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./familar-question.scss";
</style>
