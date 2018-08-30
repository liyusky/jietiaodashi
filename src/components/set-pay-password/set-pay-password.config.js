module.exports = {
  content: '设置支付密码',
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
    'billboard-list': false,
    'button': `{
        default: [{
          type: 'primary',
          text: '完成'
        }]
      }`,
    'detail-list': false,
    'inputs': false,
    'modals': false,
    'pay-password': `[]`,
    'tip': `{
        type: 'center',
        content: '输入新的支付密码'
      }`,
    'title': `{
        contentText: '设置支付密码'
      }`,
    'work-card': false
  }
}
