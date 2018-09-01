module.exports = {
  content: '立即还款',
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
          text: '立即还款'
        }]
      }`,
    'deadline': false,
    'detail-list': false,
    'image-bg': false,
    'inputs': 1,
    'modals': false,
    'nav': false,
    'pay-password': false,
    'tab': false,
    'tip': `{
        type: 'default',
        content: '已阅读并同意相关协议'
      }`,
    'title': `{
        contentText: '立即还款'
      }`,
    'work-card': false
  }
}
