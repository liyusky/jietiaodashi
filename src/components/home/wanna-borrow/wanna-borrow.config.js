module.exports = {
  content: '我要借款',
  router: true,
  vuex: {
    'mutations': false,
    'state': false
  },
  class: {
    'Check': false,
    'Http': false,
    'Router': false,
    'Time': false,
    'Url': false
  },
  components: {
    'billboard': false,
    'board': false,
    'button': `{
        default: [{
          type: 'primary',
          text: '发布借条'
        }]
      }`,
    'deadline': 1,
    'detail-list': false,
    'image-bg': false,
    'inputs': false,
    'modals': false,
    'nav': false,
    'pay-password': false,
    'receipt': false,
    'tab': false,
    'tip': `{
        type: 'default',
        content: '已同意协议',
        protocol: '借条大师协议',
        icon: 'cong',
        selected: 'true'
      }`,
    'title': `{
        contentText: '我要借款',
        icon: 'cong'
      }`,
    'work-card': false
  }
}
