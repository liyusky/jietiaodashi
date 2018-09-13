module.exports = {
  content: '账单明细',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'BM': true,
    'Btn': false,
    'Check': false,
    'Http': true,
    'Mock': false,
    'Router': true,
    'Status': false,
    'Storage': true,
    'Time': true,
    'Type': false,
    'Url': false
  },
  components: {
    'billboard': false,
    'board': false,
    'button': `{
        group: [
          {
            text: '提现',
            class: 'primary'
          },
          {
            text: '充值',
            class: 'default'
          }
        ]
      }`,
    'deadline': false,
    'detail-list': `[{
        type: 'title',
        content: '本月收支明细'
      }]`,
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
        contentText: '账户余额',
        rightText: '收支明细'
      }`,
    'work-card': false
  }
}
