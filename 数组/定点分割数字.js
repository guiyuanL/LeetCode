function paddingNum(number) {
  if (number < 1000) return number + ''
  let remainder = Math.floor(number) % 1000
  const dotRight = (number + '').slice((number + '').lastIndexOf('.'))

  const check = (number, tempStr) => {
    if (Math.floor(number / 1000) < 1) {
      return '' + tempStr
    } else {
      const num = Math.floor(number / 1000)
      remainder = num % 1000
      tempStr = remainder + ',' + tempStr
      return check(num, tempStr)
    }
  }

  return check(number, remainder + dotRight)
}

let number = 1234556952334.5634
console.log(paddingNum(number))