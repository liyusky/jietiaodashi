module.exports = {
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
    'button': false,
    'detail-list': `[
        {
          type: 'total',
          time: '2012-11-11',
          pay: '11111',
          income: '22222',
          icon: 'cong'
        }, {
          type: 'double',
          title: '提现',
          count: '-3,049.00',
          time: '11-19  15:14  周三',
          remnant: '余额:0.05',
          icon: 'cong'
        }, {
          type: 'double',
          title: '提现',
          count: '-3,049.00',
          time: '11-19  15:14  周三',
          remnant: '余额:0.05',
          icon: 'cong'
        }, {
          type: 'double',
          title: '提现',
          count: '-3,049.00',
          time: '11-19  15:14  周三',
          remnant: '余额:0.05',
          icon: 'cong'
        }
      ]`,
    'inputs': false,
    'modals': false,
    'tip': false,
    'title': `{
        contentText: '收支明细'
      }`
  }
}
