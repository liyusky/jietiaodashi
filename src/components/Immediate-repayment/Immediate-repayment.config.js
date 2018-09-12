module.exports = {
  content: '立即还款',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'Check': true,
    'Http': true,
    'Mock': false,
    'Router': false,
    'Storage': false,
    'Time': false,
    'Url': false
  },
  components: {
    'billboard': false,
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
    'keyboard': false,
    'modals': false,
    'nav': false,
    'pay-password': false,
    'receipt': false,
    'tab': false,
    'tip': `{
        type: 'default',
        content: '已阅读并同意相关协议',
        icon: 'cong',
        selected: 'true'
      }`,
    'title': `{
        contentText: '立即还款'
      }`,
    'work-card': false
  }
}
