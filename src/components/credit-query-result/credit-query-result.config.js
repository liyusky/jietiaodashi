module.exports = {
  content: '查询结果',
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
    'board': `'center'`,
    'button': false,
    'deadline': false,
    'detail-list': `[
        {
          type: 'default',
          key: '总逾期笔数',
          value: '10笔'
        },
        {
          type: 'default',
          key: '总逾期金额',
          value: '8848.00元'
        },
        {
          type: 'default',
          key: '最长逾期天数',
          value: '58天'
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
    'tip': `{
        type: 'center',
        content: '查询结果'
      }`,
    'title': `{
        contentText: '查询结果'
      }`,
    'work-card': false
  }
}
