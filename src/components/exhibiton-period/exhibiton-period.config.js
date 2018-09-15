module.exports = {
  content: '展期',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'BM': false,
    'Btn': false,
    'Check': true,
    'Http': true,
    'Mock': false,
    'Router': true,
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
          text: '同意展期'
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
    'tip': `{
        type: 'default',
        content: '同意相关协议',
        icon: 'cong',
        selected: 'true'
      }`,
    'title': `{
        contentText: '展期'
      }`,
    'without': false,
    'work-card': false
  }
}
