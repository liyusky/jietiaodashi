module.exports = {
  content: '账单明细',
  router: true,
  vuex: {
    'mutations': false,
    'state': false
  },
  class: {
    'Http': false,
    'Time': false,
    'Url': false
  },
  components: {
    'billboard-list': false,
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
    'detail-list': false,
    'inputs': false,
    'modals': false,
    'tip': false,
    'title': `{
        contentText: '账户余额',
        rightText: '收支明细'
      }`,
    'work-card': false
  }
}
