const m = 2
const k = 5
const beautyValues = [5, 5, 5, 4, 5, 5, , 5, 5]

function solutions(beautyValues, m, k) {
  let count = 0

  const check = (subArr) => {
    for (let i = 0; i < subArr.length; i++) {
      if (subArr[i] < k) {
        return false
      }
    }
    return true
  }

  for (let i = 0; i < beautyValues.length - m; i++) {
    const subArr = beautyValues.slice(i, i + m)
    if (!check(subArr)) {
      subArr.lastIndexOf()
      continue
    }
    count++
  }

  return count
}

console.log(solutions(beautyValues, m, k))