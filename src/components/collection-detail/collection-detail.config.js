module.exports = {
  content: '催收详情',
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
    'Citys': false,
    'Error': false,
    'Hasten': true,
    'Http': true,
    'Mock': false,
    'Router': false,
    'Status': false,
    'Storage': true,
    'Time': false,
    'Type': false,
    'Url': false
  },
  components: {
    'billboard': false,
    'board': false,
    'button': false,
    'deadline': false,
    'detail-list': `[
        {
          type: 'default',
          key: '催收金额',
          value: ''
        }, {
          type: 'default',
          key: '打赏比例',
          value: ''
        }, {
          type: 'default',
          key: '到期时间',
          value: ''
        }
      ]`,
    'image-bg': false,
    'inputs': false,
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
        contentText: '催收详情'
      }`,
    'without': false,
    'work-card': false
  }
}
