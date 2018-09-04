module.exports = {
  content: '销账',
  router: true,
  vuex: {
    'mutations': false,
    'state': false
  },
  class: {
    'Http': false,
    'Router': false,
    'Time': false,
    'Url': false
  },
  components: {
    'billboard': false,
    'board': `'center'`,
    'button': `{
        default: [{
          type: 'primary',
          text: '提交'
        }]
      }`,
    'deadline': false,
    'detail-list': false,
    'image-bg': false,
    'inputs': `1`,
    'modals': false,
    'nav': false,
    'pay-password': false,
    'receipt': false,
    'tab': false,
    'tip': `{
        type: 'default',
        content: '已阅读相关协议',
        icon: 'cong',
        selected: 'true'
      }`,
    'title': `{
        contentText: '销账'
      }`,
    'work-card': false
  }
}
