module.exports = {
  content: '当日收还款详情',
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
    'billboard': `[
        {
          type: 'guide',
          key: '应收款(元)',
          value: '545.48.24',
          dot: true
        },
        {
          type: 'guide',
          key: '应还款(元)',
          value: '无',
          dot: true
        }
      ]`,
    'board': false,
    'button': false,
    'deadline': false,
    'detail-list': false,
    'image-bg': false,
    'inputs': false,
    'keyboard': false,
    'modals': false,
    'nav': false,
    'pay-password': false,
    'receipt': `{
        name: '幸福不会远',
        type: '借出',
        portrait: 'https://api.vtrois.com/image/81/fff7db/e62991',
        rate: '0',
        start: '2017-11-30',
        end: '2017-12-01',
        money: '200',
        status: '已受理'
      }`,
    'tab': false,
    'tip': `{
        type: 'center',
        content: '当日汇总(共50笔)'
      }`,
    'title': `{
        contentText: '2018年5月17日收还款'
      }`,
    'work-card': false
  }
}
