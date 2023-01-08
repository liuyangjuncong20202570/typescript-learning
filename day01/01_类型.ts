let e: unknown = 'hello'
let a: string = '我是你爹'

// unknown类型进行赋值两种方法
// 1：类型判断
if (typeof e === 'string') {
  a = e
}
// 2：类型断言
// 注意：ts中写类型不要用大写，否则会报错
a = e as string // 相当于告诉ts编译器e的类型不再是unknown而是string
a = <string>e // 类型断言也可这样写

// 对象类型
// 通过字面量来确立一个对象类型变量，可以默认指定其内部所含元素与属性
let b: { name: string; fn: () => void }

b = {
  name: '我是你爹',
  fn: (): void => {
    console.log('我是个函数')
  }
}

console.log(b.fn())

// [propName:string]:any表示任意类型属性值
let c: { name: string; [propName: string]: any }
c = { name: '你好', b: 18, c: 'wsnd' }

// 数组的定义
let arr: Array<number> = [1, 2, 3]
// or:
let arr1: string[] = ['a', 'b', 'c']

// 元组
let d: [string, number] = ['abc', 12]
// 元组可以看成是一个具有一定长度的数组
// 在进行插入越界元素时，元素类型是原来类型的联合类型
// 就拿d来说，插入越界元素的类型范围是string | number
d.push('张三')
// d.push(true) 此处报错，因为原先定义的元组中没有boolean元素
console.log(d)

// 枚举类型，用来列举所有可能含有的值
// 在内部存储的时候会把Gender中的各个值转成数字进行存储
enum Gender {
  Male,
  Female
}
let i: { name: string; gender: Gender } = {
  name: '张三',
  gender: Gender.Male
}
