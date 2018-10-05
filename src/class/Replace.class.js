export default class Replace {
  static mask (str, start, length, mask) {
    let replace = ''
    for (let i = 0; i < length; i++) {
      replace += mask
    }
    return str.replace(str.substr(start, length), replace)
  }
  static maskCard (str, start, length, mask) {
    let replace = ''
    for (let i = 0; i < length; i++) {
      replace += mask
    }
    let newArr = str.replace(str.substr(start, length), replace).split('')
    for (let i = 0; i < newArr.length; i++) {
      if (i % 5 === 0) {
        newArr.splice(i, 0, ' ')
      }
    }
    return newArr.join('')
  }
}
