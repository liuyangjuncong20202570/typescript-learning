export {}
interface PItf {
  name: string
  age: number
  [idx: string]: string | number
  [idx: number]: string | number
}

type PType = keyof PItf
// 此时PType中的值可以是：'name'|'age'|string|number
// 其中name和age为常量，是不能修改的，但其余两个因为在接口中改了索引签名，所以是动态的string和number
let obj: PType = 'name'
obj = 'age'
obj = 'ssss'
obj = 123

type StrOrNum = string | number
type InType = {
  [k in StrOrNum]: string
}
let obj1: InType = {
  a: 'xxx',
  10: 'xxx'
}

// typeof 字面量提取
// 提取普通类型
let str = 'xxx'
type StrType = typeof str //string
let str1: StrType = '111'
// 提取复杂类型
let obj2 = {
  name: 'xxx',
  age: 12
}
type Otype = typeof obj2
/* 
会返回以下类型别名
{
  name:string,
  age:number
}
*/

let obj3: Otype = {
  name: 'xxx',
  age: 15
}
