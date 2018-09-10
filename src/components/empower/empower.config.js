module.exports = {
  content: '登录',
  router: true,
  vuex: {
    mutations: {
      saveOrigin: false,
<<<<<<< HEAD
      savePurpose: false,
      saveRoute: false,
      saveBankCard: false,
      saveToken: true,
      savePhone: true
=======
      saveToken: true,
      savePhone: true,
      saveName: true
>>>>>>> 57d2ccf2f4e2e340a472f32f1e18d8934b927a70
    },
    state: false
  },
  class: {
    'Check': true,
    'Http': true,
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
