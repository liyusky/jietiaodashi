module.exports = {
  content: '支付密码设置',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'Check': false,
    'Http': false,
    'Mock': false,
    'Router': true,
    'Storage': false,
    'Time': false,
    'Url': false
  },
  components: {
    'billboard': `[
        {
          type: 'guide',
          key: '修改支付密码',
          icon: 'chuyin',
          target: 'modefy-pay-password'
        },
        {
          type: 'guide',
          key: '忘记支付密码',
          icon: 'chuyin',
          target: 'identity-verification'
        }
      ]`,
    'board': false,
    'button': false,
    'deadline': false,
    'detail-list': false,
    'image-bg': false,
    'inputs': false,
    'keyboard': false,
    'modals': false,
    'nav': false,
    'pay-password': false,
    'receipt': false,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '支付密码设置'
      }`,
    'work-card': false
  }
}
