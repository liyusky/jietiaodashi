module.exports = {
  content: '收支明细详情',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'Check': false,
    'Http': false,
    'Mock': false,
    'Router': false,
    'Storage': false,
    'Time': false,
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
          key: '类型',
          value: '收回'
        },
        {
          type: 'default',
          key: '时间',
          value: '2017-12-31 12:25:55 周三'
        },
        {
          type: 'default',
          key: '说明',
          value: '收到周明明的还款'
        },
        {
          type: 'default',
          key: '余额',
          value: '1500.00'
        },
        {
          type: 'default',
          key: '其他',
          value: '无'
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
        contentText: '收支明细详情'
      }`,
    'work-card': false
  }
}
