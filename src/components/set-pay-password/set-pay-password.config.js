module.exports = {
  content: '设置支付密码',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'BM': false,
    'Btn': false,
    'Check': false,
    'Hasten': false,
    'Http': false,
    'Mock': false,
    'Router': false,
    'Status': false,
    'Storage': false,
    'Time': false,
    'Type': false,
    'Url': false
  },
  components: {
    'billboard': false,
    'board': false,
    'button': `{
        default: [{
          type: 'primary',
          text: '完成'
        }]
      }`,
    'deadline': false,
    'detail-list': false,
    'image-bg': false,
    'inputs': false,
    'keyboard': false,
    'modal': false,
    'modals': false,
    'nav': false,
    'pay-password': `[]`,
    'pull-refresh': false,
    'receipt': false,
    'tab': false,
    'tip': `{
        type: 'center',
        content: '输入新的支付密码'
      }`,
    'title': `{
        contentText: '设置支付密码'
      }`,
    'without': false,
    'work-card': false
  }
}
