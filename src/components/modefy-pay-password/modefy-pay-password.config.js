module.exports = {
  content: '修改支付密码',
  router: true,
  vuex: {
    'mutations': false,
    'state': false
  },
  class: {
    'Http': false,
    'Time': false,
    'Url': false
  },
  components: {
    'billboard-list': false,
    'button': false,
    'detail-list': false,
    'inputs': false,
    'modals': false,
    'pay-password': false,
    'tip': false,
    'title': `{
        contentText: '中间内容',
        leftText: '左边箭头后文字',
        rightText: '右边文字内容',
        icon: '右边icon',
        svg: '右边svg'
      }`,
    'work-card': false
  }
}
