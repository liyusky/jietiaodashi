module.exports = {
  content: '失信查询',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'Account': false,
    'BM': false,
    'Btn': false,
    'Check': false,
    'Hasten': false,
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
    'billboard': false,
    'board': `'center'`,
    'button': `{
        default: [{
          type: 'primary',
          text: '立即查询'
        }]
      }`,
    'deadline': false,
    'detail-list': false,
    'image-bg': false,
    'inputs': `{
        type: 'default',
        placeholder: '输入查询对象的账号/身份证号'
      }`,
    'keyboard': false,
    'modal': false,
    'modals': false,
    'nav': false,
    'pay-password': false,
    'pull-refresh': false,
    'receipt': false,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '失信查询'
      }`,
    'without': false,
    'work-card': false
  }
}
