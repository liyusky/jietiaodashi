module.exports = {
  content: '我的',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'BM': false,
    'Btn': false,
    'Check': false,
    'Http': true,
    'Mock': false,
    'Router': true,
    'Status': false,
    'Storage': true,
    'Time': false,
    'Type': false,
    'Url': false
  },
  components: {
    'billboard': `[
        {
          key: '收还款计划',
          icon: 'chuyin',
          svg: 'cangjian',
          target: 'account-statistic',
          border: true
        },
        {
          key: '我的银行卡',
          icon: 'chuyin',
          svg: 'cangjian',
          target: 'my-bank-card',
          border: true
        },
        {
          key: '常见问题',
          icon: 'chuyin',
          svg: 'cangjian',
          target: 'familar-question',
          border: true
        },
        {
          key: '在线客服',
          icon: 'chuyin',
          svg: 'cangjian',
          border: true
        },
        {
          key: '授信',
          svg: 'cangjian',
          icon: 'chuyin',
          target: 'credit',
          border: true
        },
        {
          key: '意见反馈',
          svg: 'cangjian',
          icon: 'chuyin',
          target: 'feedback',
          border: true
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
    'receipt': false,
    'tab': false,
    'tip': false,
    'title': false,
    'work-card': false
  }
}
