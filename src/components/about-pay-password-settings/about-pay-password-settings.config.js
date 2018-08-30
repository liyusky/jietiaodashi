module.exports = {
  content: '支付密码设置',
  router: true,
  vuex: {
    'mutations': false,
    'state': false
  },
  class: {
    'Data': false,
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
    'deadline': false,
    'detail-list': false,
    'inputs': false,
    'modals': false,
    'pay-password': false,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '支付密码设置'
      }`,
    'work-card': false
  }
}
