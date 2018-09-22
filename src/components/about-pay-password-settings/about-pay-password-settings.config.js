module.exports = {
  content: '支付密码设置',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'Account': false,
    'BM': false,
    'Btn': false,
    'Check': false,
    'Citys': false,
    'Error': false,
    'Hasten': false,
    'Http': false,
    'Mock': false,
    'Router': true,
    'Status': false,
    'Storage': false,
    'Time': false,
    'Type': false,
    'Url': false
  },
  components: {
    'billboard': `[
        {
          type: 'guide',
          key: '修改支付密码',
          icon: 'arrow-right',
          target: 'modefy-pay-password'
        },
        {
          type: 'guide',
          key: '忘记支付密码',
          icon: 'arrow-right',
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
    'modal': false,
    'modals': false,
    'nav': false,
    'pay-password': false,
    'pull-refresh': false,
    'receipt': false,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '支付密码设置'
      }`,
    'without': false,
    'work-card': false
  }
}
