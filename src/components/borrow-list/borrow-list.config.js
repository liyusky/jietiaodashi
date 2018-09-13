module.exports = {
  content: '借入',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'BM': false,
    'Btn': false,
    'Check': false,
    'Http': true,
    'Mock': false,
    'Router': true,
    'Status': true,
    'Storage': true,
    'Time': false,
    'Type': true,
    'Url': false
  },
  components: {
    'billboard': false,
    'board': 1,
    'button': false,
    'deadline': false,
    'detail-list': false,
    'image-bg': `'https://api.vtrois.com/image/750x300/ff8d7b'`,
    'inputs': false,
    'keyboard': false,
    'modals': false,
    'nav': `{
        content: ['当前', '已放款', '已逾期', '已还清', '已失效'],
        active: ''
      }`,
    'pay-password': false,
    'pull-refresh': false,
    'receipt': `[]`,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '借入'
      }`,
    'work-card': false
  }
}
