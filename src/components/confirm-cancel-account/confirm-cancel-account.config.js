module.exports = {
  content: '确认销账',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'Check': false,
    'Http': false,
    'Router': false,
    'Storage': false,
    'Time': false,
    'Url': false
  },
  components: {
    'billboard': false,
    'board': false,
    'button': `{
        default: [{
          type: 'primary',
          text: '确认销账'
        }]
      }`,
    'deadline': false,
    'detail-list': `[
        {
          type: 'default',
          key: '销账金额',
          value: '其他方式付款'
        },
        {
          type: 'default',
          key: '剩余应收款',
          value: '0.00'
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
        contentText: '确认销账'
      }`,
    'work-card': false
  }
}
