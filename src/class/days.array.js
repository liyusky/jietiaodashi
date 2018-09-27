let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let year = (new Date()).getFullYear()
if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
  days[1] = 29
}

export default days