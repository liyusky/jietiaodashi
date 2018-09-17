module.exports = {
  content: '修改支付密码',
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
    'Router': false,
    'Stata': false,
    'Status': false,
    'Storage': true,
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
    'keyboard': 1,
    'modals': false,
    'nav': false,
    'pay-password': `[]`,
    'pull-refresh': false,
    'receipt': false,
    'tab': false,
    'tip': `{
        type: 'center',
        content: '请输入原始支付密码'
      }`,
    'title': `{
        contentText: '修改支付密码'
      }`,
    'without': false,
    'work-card': false
  }
}
