const n = 8
const m = 3

const matrix = [
  '1 0 1',
  '0 1 0',
  '0 1 0',
  '1 0 1',
  '1 0 1',
  '0 1 0',
  '0 1 0',
  '1 0 1'
]

const check = (matrix) => {
  if (matrix.length < 1 || matrix.length % 2 !== 0) return false
  let pre = 0, suf = matrix.length - 1
  while (pre < suf) {
    if (matrix[pre] === matrix[suf]) {
      pre++
      suf--
    } else {
      return false
    }
  }
  return true
}

const printResult = (matrix) => {
  if (check(matrix)) {
    matrix = matrix.slice(0, Math.floor(matrix.length / 2))
    printResult(matrix)
  } else {
    matrix.forEach((value) => {
      console.log(value)
    })
  }
}

printResult(matrix)

