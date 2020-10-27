const arr1 = '1,3,5'.split(',').map((value) => { return parseInt(value) })
const arr2 = '1,4,6'.split(',').map((value) => { return parseInt(value) })
console.log(arr1)

function merge(arr1, arr2) {
  const ans = []
  const n1 = arr1.length
  const n2 = arr2.length

  let p1 = 0
  let p2 = 0
  while (p1 < n1 && p2 < n2) {
    arr1[p1] < arr2[p2] ? ans.push(arr1[p1++]) : ans.push(arr2[p2++])
  }
  if (p1 < n1) {
    ans.push(...arr1.slice(p1, n1))
  }
  if (p2 < n2) {
    ans.push(...arr2.slice(p2, n2))
  }
  return ans
}



console.log(merge(arr1, arr2).join(','))