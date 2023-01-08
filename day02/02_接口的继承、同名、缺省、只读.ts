export {}
// 接口的继承
interface NameIf {
  name: string
}

interface AgeItf {
  age: number
}

// 当某一个接口继承了其他接口，那么该接口便有了父接口的所有属性
interface exItf extends NameIf, AgeItf {
  score: number
}

let ex: exItf = {
  name: '张三',
  age: 18,
  score: 100
}
console.log(ex)

// 接口的同名
interface AItf {
  name: string
}

interface AItf {
  age: number
}

// 当出现同名的接口，后面的同名接口相当于在补充前面的接口
let a: AItf = {
  name: 'zs',
  age: 18
}
console.log(a)

// 接口的缺省
// 当接口中的某一项属性后面出现了？说明该属性是缺省的，即该属性是可以被省略不写的
interface BItf {
  a?: number
  b: string
}

let b: BItf = {
  b: 'wsnd' // a属性可以被省略，但b不行
}
console.log(b)

// 接口的只读属性
// 当某项属性值前面有readonly属性修饰时，说明该属性是只读的，只有第一次定义时能改，其他时候不能修改
interface CItf {
  readonly c: number
  d: string
}

let c: CItf = {
  c: 18,
  d: 'wsnd'
}
console.log(c)

// c.c = 20 此句报错，因为c为只读属性
