module.exports = {
  content: 'undefined',
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
        default: {
          type: 'primary',
          text: '登录'
        }
      }`,
    'deadline': false,
    'detail-list': false,
    'inputs': false,
    'modals': false,
    'pay-password': false,
    'tab': false,
    'tip': false,
    'title': false,
    'work-card': false
  }
}
