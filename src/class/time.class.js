export default class Time {
  // 只支持关键字（YYYY、MM、DD、HH、hh、mm、ss WW）HH：表示24小时，hh表示12小时
  static current (format, params) {
    let time = null
    if (params) {
      let date = new Date()
      let timestamp = date.getTime()
      if (params.hour) timestamp += params.hour * 60 * 60 * 1000
      time = this.format(format, timestamp)
    } else {
      time = this.format(format)
    }
    return time
  }

  static format (format, timestamp) {
    let date = null
    if (timestamp) {
      date = new Date(timestamp)
    } else {
      date = new Date()
    }
    if (!format) return
    if (format.indexOf('YYYY') >= 0) format = format.replace('YYYY', date.getFullYear())
    if (format.indexOf('MM') >= 0) {
      let month = date.getMonth() + 1
      if (month < 10) month = '0' + month
      format = format.replace('MM', month)
    }
    if (format.indexOf('DD') >= 0) {
      let day = date.getDate()
      if (day < 10) day = '0' + day
      format = format.replace('DD', day)
    }
    if (format.indexOf('HH') >= 0) format = format.replace('HH', date.getHours())
    if (format.indexOf('hh') >= 0) {
      let hours = date.getHours()
      if (hours > 12) hours = hours - 12
      if (hours < 10) hours = '0' + hours
      format = format.replace('hh', hours)
    }
    if (format.indexOf('mm') >= 0) {
      let minute = date.getMinutes()
      if (minute < 10) minute = '0' + minute
      format = format.replace('mm', minute)
    }
    if (format.indexOf('ss') >= 0) {
      let second = date.getSeconds()
      if (second < 10) second = '0' + second
      format = format.replace('ss', second)
    }
    if (format.indexOf('WW') >= 0) {
      let ww = date.getDay()
      let weekday = [
        '周日',
        '周一',
        '周二',
        '周三',
        '周四',
        '周五',
        '周六'
      ]
      format = format.replace('WW', weekday[ww])
    }
    return format
  }
}
