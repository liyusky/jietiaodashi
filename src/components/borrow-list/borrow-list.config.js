module.exports = {
  content: '借入',
  router: true,
  vuex: {
    'mutations': false,
    'state': false
  },
  class: {
    'Http': false,
    'Router': false,
    'Time': false,
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
    'modals': false,
    'nav': `{
        content: ['当前', '已还清'],
        active: ''
      }`,
    'pay-password': false,
    'receipt': `[{
        name: '幸福不会远',
        type: '借出',
        portrait: 'https://api.vtrois.com/image/81/fff7db/e62991',
        rate: '0',
        start: '2017-11-30',
        end: '2017-12-01',
        money: '200',
        status: '已受理'
      }]`,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '借入'
      }`,
    'work-card': false
  }
}
