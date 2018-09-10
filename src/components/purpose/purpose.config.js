module.exports = {
  content: '借款用途',
  router: true,
  vuex: {
    mutations: {
      saveOrigin: false,
      savePurpose: false,
      saveRoute: false,
      saveBankCard: false,
      saveToken: false,
      savePhone: false,
      saveName: false
    },
    state: false
  },
  class: {
    'Check': false,
    'Http': false,
    'Router': false,
    'Storage': false,
    'Time': false,
    'Url': false
  },
  components: {
    'billboard': false,
    'board': false,
    'button': false,
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
    'title': `{
        contentText: '借款用途',
        rightText: '保存'
      }`,
    'work-card': false
  }
}
