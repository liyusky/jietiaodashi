module.exports = {
  content: '展期状态',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'Check': false,
    'Http': false,
    'Router': false,
    'Time': false,
    'Url': false
  },
  components: {
    'billboard': false,
    'board': false,
    'button': `{
        default: [{
          type: 'primary',
          text: '确认'
        }]
      }`,
    'deadline': false,
    'detail-list': `[
        {
          type: 'default',
          key: '展期日期',
          value: '2017年12月14日'
        },
        {
          type: 'default',
          key: '展期利率',
          value: '10%'
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
    'tip': false,
    'title': `{
        contentText: '展期状态'
      }`,
    'work-card': false
  }
}
