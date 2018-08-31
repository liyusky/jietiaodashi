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
    'board': false,
    'button': `{
        default: [{
          type: 'primary',
          text: '完成'
        }]
      }`,
    'deadline': false,
    'detail-list': false,
    'image-bg': false,
    'inputs': false,
    'modals': false,
    'nav': false,
    'pay-password': `[]`,
    'tab': false,
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
