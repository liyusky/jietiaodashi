module.exports = {
  content: '',
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
    'billboard-list': false,
    'button': `{
        default: [{
          type: 'primary',
          text: '提交'
        }]
      }`,
    'deadline': false,
    'detail-list': false,
    'image-bg': false,
    'inputs': false,
    'modals': false,
    'nav': false,
    'pay-password': false,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '忘记密码'
      }`,
    'work-card': false
  }
}
