module.exports = {
  content: '当日收还款详情',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'Check': false,
    'Http': true,
    'Router': true,
    'Status': true,
    'Storage': true,
    'Time': false,
    'Type': true,
    'Url': false
  },
  components: {
    'billboard': `[
        {
          type: 'guide',
          key: '应收款(元)',
          value: '',
          dot: true
        },
        {
          type: 'guide',
          key: '应还款(元)',
          value: '',
          dot: true
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
    'receipt': `[]`,
    'tab': false,
    'tip': `{
        type: 'center',
        content: ''
      }`,
    'title': `{
        contentText: '2018年5月17日收还款'
      }`,
    'work-card': false
  }
}
