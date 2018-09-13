module.exports = {
  content: '借条详情',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'BM': false,
    'Btn': true,
    'Check': false,
    'Http': true,
    'Mock': false,
    'Router': true,
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
    'detail-list': `[
        {
          type: 'default',
          key: '借出本金：',
          value: ''
        },
        {
          type: 'default',
          key: '年利率：',
          value: ''
        },
        {
          type: 'default',
          key: '借款日：',
          value: ''
        },
        {
          type: 'default',
          key: '到期日：',
          value: ''
        },
        {
          type: 'default',
          key: '其他费用：',
          value: '0元'
        }
      ]`,
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
        contentText: '借条详情'
      }`,
    'work-card': false
  }
}
