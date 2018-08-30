module.exports = {
  content: '设置',
  author: 'liyusky',
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
          key: '支付设置',
          icon: 'chuyin',
          target: ''
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
          target: ''
        },
        {
          type: 'guide',
          key: '意见反馈',
          icon: 'chuyin',
          target: ''
        }
      ]`,
    'button': `{
        default: [{
          type: 'wran',
          text: '安全退出'
        }]
      }`,
    'deadline': false,
    'detail-list': false,
    'inputs': false,
    'modals': false,
    'pay-password': false,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '设置'
      }`,
    'work-card': false
  }
}
