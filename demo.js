// function partition(s) {
//   const res = []
//   const n = s.length
//   if (n <= 0) {
//     return res
//   }
//   for (let pre = 0; pre < n; pre++) {
//     const temp = []
//     for (let suf = n; suf > pre; suf--) {
//       let str = s.slice(pre, suf)
//       if (str && isPal(str)) {
//         temp.push(str)
//       }
//       partition(str)
//     }
//   }
//   return res
// }

// function backStack(str, start) {
//   const temp = []

// }


// function isPal(s) {
//   let str = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase()
//   const n = str.length
//   let i = 0
//   let j = n - 1
//   while (i < j) {
//     if (str.charAt(i) == str.charAt(j)) {
//       i++
//       j--
//       continue
//     }
//     return false
//   }
//   return true
// }
// // const s = "A man, a plan, a canal: Panama"

// // console.log(isPal(s))

// // const s = 'aab'
// // console.log(partition(s))


// const N = 4

// function upstairs(N) {
//   // let ans = 0
//   if (N <= 2) {
//     return N
//   }
//   for (let i = 3; i <= N; i++) {
//     return upstairs(N - 1) + upstairs(N - 2)
//   }
// }

// console.log(upstairs(N))

/*
判断一个字符串中出现次数最多的字符，统计这个次数
*/

function maxCount(s) {
  const n = s.length
  const map = new Map()
  for (let i = 0; i < n; i++) {
    let ch = s.charAt(i)
    if (!map.has(ch)) {
      map.set(ch, 1)
    } else {
      map.set(ch, map.get(ch) + 1)
    }
  }
  console.log(map)
  return Math.max(...map.values())
}

let s = 'fajkbnfqabudaifhiaoawasasdwafdasfdgfd'
console.log(maxCount(s))
