module.exports = {
  router: true,
  vuex: {
    'mutations': false,
    'state': false
  },
  class: {
    'Http': true,
    'Time': false,
    'Url': false
  },
  components: {
    'button': false,
    'detail-list': false,
    'inputs': false,
    'modals': false,
    'tip': `{
        type: 'default center',
        content: '传入文字消息',
        protocol: '协议名字',
        icon: '传入的iconfont名',
        svg: '传入借条tip的svg名',
        selected: 'false true',
        theme: 'blue red'
      }`,
    'title': `{
        contentText: '中间内容',
        leftText: '左边箭头后文字',
        rightText: '右边文字内容',
        icon: '右边icon',
        svg: '右边svg'
      }`
  }
}
