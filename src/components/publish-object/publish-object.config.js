module.exports = {
  content: '发布对象',
  router: true,
  vuex: {
    mutations: {
      saveOrigin: false,
      savePurpose: false,
      saveRoute: false,
      saveBankCard: false,
      saveToken: false,
      savePhone: false,
      saveName: false,
      savePublishObject: true
    },
    state: false
  },
  class: {
    'Check': false,
    'Http': false,
    'Mock': false,
    'Router': true,
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
        contentText: '发布对象',
        rightText: '确定'
      }`,
    'work-card': false
  }
}
