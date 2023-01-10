export {}
// 类
class Person {
  // 1、定义属性之前，应声明该属性的类型和默认值，如果没有默认值则必须在constructor构造函数中给属性赋值
  myName: string = '默认名称'
  givenName: string
  constructor(n: string) {
    this.givenName = n
  }
  getName() {
    return this.myName
  }
}

// 2、在定义属性时相当于定义了一个同名接口
// interface Person {
//   myName: string
//   givenName: string
//   getName: () => string
// }
// 类构造实例
let P = new Person('zhangsan')
console.log(P.getName())

// 调用同名接口
let obj: Person = {
  myName: 'zhangsan',
  givenName: 'lisi',
  getName: function () {
    return this.givenName
  }
}
console.log(obj.getName())

// 类的继承
class Male extends Person {
  age: number
  constructor(name: string, age: number) {
    super(name) // super关键字相当于是在调用父类的constructor构造函数
    this.age = age
  }
  getName(): string {
    // 子类中对方法进行重写，会覆盖原先父类中的同名方法
    return this.myName
  }
}
