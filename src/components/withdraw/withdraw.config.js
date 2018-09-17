module.exports = {
  content: '提现',
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
    'Storage': true,
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
          text: '提现'
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
        contentText: '提现'
      }`,
    'without': false,
    'work-card': false
  }
}
