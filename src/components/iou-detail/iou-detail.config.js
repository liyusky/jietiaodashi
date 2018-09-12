module.exports = {
  content: '借条详情',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'Check': false,
    'Http': true,
    'Mock': false,
    'Router': true,
    'Status': true,
    'Storage': true,
    'Time': false,
    'Type': true,
    'Url': false
  },
  components: {
    'billboard': false,
    'board': false,
    'button': `{
        default: [{
          type: 'default',
          text: '销账'
        }],
        group: [
          {
            text: '同意',
            class: 'primary'
          },
          {
            text: '拒绝',
            class: 'danger'
          }
        ]
      }`,
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
          value: '2017-07-18'
        },
        {
          type: 'default',
          key: '其他费用：',
          value: '20元'
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
    'tip': 1,
    'title': `{
        contentText: '借条详情'
      }`,
    'work-card': false
  }
}
