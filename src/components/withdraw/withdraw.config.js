module.exports = {
  content: '提现',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'Check': true,
    'Http': true,
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
          text: '立即提现'
        }]
      }`,
    'deadline': false,
    'detail-list': false,
    'image-bg': false,
    'inputs': `{
        type: 'icon',
        placeholder: '请输入金额',
        leftIcon: 'cong',
        style: 'number'
      }`,
    'keyboard': false,
    'modals': false,
    'nav': false,
    'pay-password': false,
    'pull-refresh': false,
    'receipt': false,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '提现',
        rightText: '限额说明'
      }`,
    'work-card': false
  }
}
