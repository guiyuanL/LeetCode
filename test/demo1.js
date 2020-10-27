const obj = JSON.parse('{"1":123,"2":234,"8":456}')
const keys = []
for (const key in obj) {
  keys.push(parseInt(key))
}

keys.sort((a, b) => {
  return a - b
})
const min = keys[0]
const max = keys[keys.length - 1]

const ans = new Array(max).fill(0)

// for (const key in obj) {
//   ans[parseInt(key) - 1] = obj[key]
// }


console.log(JSON.stringify(ans))
console.log(new Array(2).fill(0))