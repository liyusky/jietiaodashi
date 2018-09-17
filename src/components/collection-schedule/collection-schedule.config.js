module.exports = {
  content: '催收进度',
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
    'Stata': true,
    'Status': false,
    'Storage': true,
    'Time': false,
    'Type': true,
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
    'nav': `{
        content: ['全部', '催收中', '已结束'],
        active: 'active'
      }`,
    'pay-password': false,
    'pull-refresh': false,
    'receipt': false,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '催收进度'
      }`,
    'without': 1,
    'work-card': false
  }
}
