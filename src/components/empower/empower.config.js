module.exports = {
  content: '登录',
  router: true,
  vuex: {
    mutations: {
      saveOrigin: false,
      saveToken: true
    },
    state: false
  },
  class: {
    'Check': true,
    'Http': true,
    'Router': true,
    'Time': false,
    'Url': false
  },
  components: {
    'billboard': false,
    'board': false,
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
    'keyboard': false,
    'modals': false,
    'nav': false,
    'pay-password': false,
    'receipt': false,
    'tab': false,
    'tip': false,
    'title': false,
    'work-card': false
  }
}
