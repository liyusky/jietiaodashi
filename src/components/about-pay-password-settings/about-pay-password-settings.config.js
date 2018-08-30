module.exports = {
  content: '支付密码设置',
  router: true,
  vuex: {
    'mutations': false,
    'state': false
  },
  class: {
    'Http': false,
    'Time': false,
    'Url': false
  },
  components: {
    'billboard-list': `[
        {
          type: 'guide',
          key: '修改支付密码',
          icon: 'chuyin',
          target: ''
        },
        {
          type: 'guide',
          key: '忘记支付密码',
          icon: 'chuyin',
          target: ''
        }
      ]`,
    'button': false,
    'detail-list': false,
    'inputs': false,
    'modals': false,
    'pay-password': false,
    'tip': false,
    'title': `{
        contentText: '支付密码设置'
      }`,
    'work-card': false
  }
}
