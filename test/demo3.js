// const T = parseInt(readline())
const line = '43211234'
const n = line.length
const stack = []
let count = 0
stack.push(line[0])
for (let i = 1; i < n; i++) {
  // console.log(stack[stack.length - 1])
  if (line[i] != stack[stack.length - 1]) {
    stack.push(line[i])
  } else {
    stack.splice(stack.length - 1, 1)
    count++
  }
}
console.log(count)

