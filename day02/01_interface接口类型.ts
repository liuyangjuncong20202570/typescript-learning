export {}
// 给对象用接口
interface ObjItf {
  // 给对象用接口类型中
  // 属性值：值的类型
  name: string
  age: number
  score: number
}
// 给对象用接口（简便形式）
interface ObjItf2 {
  [idx: string]: number | string | boolean
}
let obj2: ObjItf2 = {
  name: '1',
  age: 18,
  gay: false
}

let obj: ObjItf = {
  name: '张三',
  age: 18,
  score: 100
}
console.log(obj)

// 给数组用接口
interface ArrItf {
  // 给数组用的接口类型中：
  // [下角标:类型]:值的类型
  [idx: number]: string | number
}

let arr: ArrItf = [1, 2, 3, '4', '5']
console.log(arr)

// 给函数用接口：
interface FnItf {
  // 给函数用接口中：
  // (形参:值的类型):函数返回值的类型
  (p: string): void
}

let fn: FnItf = (p: string) => {
  console.log(p)
}
fn('sb')
