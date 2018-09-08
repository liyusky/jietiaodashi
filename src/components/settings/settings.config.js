module.exports = {
  content: '设置',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'Check': false,
    'Http': true,
    'Router': true,
    'Time': false,
    'Url': false
  },
  components: {
    'billboard': `[
        {
          type: 'guide',
          key: '支付设置',
          icon: 'chuyin',
          target: 'about-pay-password-settings'
        },
        {
          type: 'guide',
          key: '提现密码重置',
          icon: 'chuyin',
          target: ''
        },
        {
          type: 'guide',
          key: '了解我们',
          icon: 'chuyin',
          target: ''
        },
        {
          type: 'guide',
          key: '黑名单',
          icon: 'chuyin',
          target: 'black-list'
        },
        {
          type: 'guide',
          key: '意见反馈',
          icon: 'chuyin',
          target: 'feedback'
        }
      ]`,
    'board': false,
    'button': `{
        default: [{
          type: 'wran',
          text: '安全退出'
        }]
      }`,
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
    'title': `{
        contentText: '设置'
      }`,
    'work-card': false
  }
}
