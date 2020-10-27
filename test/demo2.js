const n = 6
const arr = '3 2 5 1 6 4'.split(' ').map((value) => {
  return parseInt(value)
})


function middleNum(arr) {
  for (let i = 0; i < n; i++) {
    const newArr = arr
    const ele = newArr.splice(i, 1)
    newArr.sort()
    console.log(newArr[Math.floor((n - 1) / 2)])
    newArr.splice(i, 0, ele[0])
  }
}

middleNum(arr)

