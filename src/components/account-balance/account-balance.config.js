module.exports = {
  content: '账单明细',
  router: true,
  vuex: {
    'mutations': false,
    'state': false
  },
  class: {
    'Data': false,
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
    'deadline': false,
    'detail-list': `[
        {
          type: 'title',
          content: '本月收支明细'
        },
        {
          type: 'double',
          title: '提现',
          count: '-3,049.00',
          time: '11-19  15:14  周三',
          remnant: '余额:0.05'
        },
        {
          type: 'double',
          title: '提现',
          count: '-3,049.00',
          time: '11-19  15:14  周三',
          remnant: '余额:0.05'
        }
      ]`,
    'inputs': false,
    'modals': false,
    'pay-password': false,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '账户余额',
        rightText: '收支明细'
      }`,
    'work-card': false
  }
}
