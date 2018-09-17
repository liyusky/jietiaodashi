module.exports = {
  content: '充值',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'BM': true,
    'Btn': false,
    'Check': true,
    'Http': false,
    'Mock': false,
    'Router': false,
    'Stata': false,
    'Status': false,
    'Storage': false,
    'Time': false,
    'Type': false,
    'Url': false
  },
  components: {
    'billboard': false,
    'board': false,
    'button': `{
        default: [{
          type: 'primary',
          text: '充值'
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
    'pull-refresh': false,
    'receipt': false,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '充值',
        rightText: '限额说明'
      }`,
    'without': false,
    'work-card': false
  }
}
