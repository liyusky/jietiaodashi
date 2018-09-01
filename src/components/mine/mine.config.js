module.exports = {
  content: '我的',
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
    'billboard-list': `[
        {
          type: 'guide',
          key: '收还款计划',
          icon: 'chuyin',
          target: ''
        },
        {
          type: 'guide',
          key: '我的银行卡',
          icon: 'chuyin',
          target: ''
        },
        {
          type: 'guide',
          key: '常见问题',
          icon: 'chuyin',
          target: ''
        },
        {
          type: 'guide',
          key: '在线客服',
          icon: 'chuyin',
          target: ''
        },
        {
          type: 'guide',
          key: '授信',
          icon: 'chuyin',
          target: ''
        },
        {
          type: 'guide',
          key: '意见反馈',
          icon: 'chuyin',
          target: ''
        }
      ]`,
    'board': false,
    'button': false,
    'deadline': false,
    'detail-list': false,
    'image-bg': false,
    'inputs': false,
    'modals': false,
    'nav': false,
    'pay-password': false,
    'receipt': false,
    'tab': `''`,
    'tip': false,
    'title': false,
    'work-card': false
  }
}
