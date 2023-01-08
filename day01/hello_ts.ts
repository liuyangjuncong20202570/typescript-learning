console.log('helo,ts')
let a: number = 10
let c = false
// c = 123
let b: Boolean = new Boolean(1)
console.log(b.valueOf())

let u: void = undefined
// let n:void = null

// any和unknown类型
let str: any = '我是憨批'
let str1: any = '我不是憨批'
// 如果是any类型，可以随意的赋值随便什么类型都可赋值给any类型
str = str1
console.log(str) //返回值为我不是憨批
// 并且作为any类型可以随意调用对象的方法和属性，甚至该对象还未存在的属性和方法
let test: any = {
  a: (): void => {
    console.log('我是个空方法')
  }
}
console.log(test.a())
// test对象上不存在b属性或方法仍然能调用
console.log(test.b) //它的返回值是undefined

// unknown类型
let un: unknown = '我是憨批'
let un1: number = 123
// un1 = un 这句代码就报错了，不能将unknown类型的值赋给其他类型的值，但是any是可以的
let un2: any = '我是憨批'
un1 = un2 //这句代码就赋值成功
let test2: unknown = {
  a: (): void => {
    console.log('我是unknown类型的空方法')
  }
}
// console.log(test2.a) 这句代码就报错，因为unknown类型无法访问到它自身对象上的方法
// 相同点
// unknown类型和any类型都可以作为父元素接受任意类型的赋值，
// 但是当作为子元素去给其他元素赋值时，any可以赋值给其他类型，但是unknown只能赋值给unknown类型或any类型
export {}
