module.exports = {
  content: '登录',
  router: true,
  vuex: {
    mutations: {
      saveOrigin: false,
      savePurpose: false,
      saveRoute: false,
      saveBankCard: false,
      saveToken: true,
      savePhone: true,
      saveName: true,
      savePublishObject: false,
      clearPublishObject: false
    },
    state: false
  },
  class: {
    'Check': true,
    'Http': true,
    'Mock': false,
    'Router': true,
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
