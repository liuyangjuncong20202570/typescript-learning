// 抽象类是普通类的描述，指定一个类的规范，给普通类进行继承实现
// 继承后，普通类内部就必须实现抽象类里面的抽象属性和抽象方法
// 抽象类内部的普通属性和方法可以直接继承，在普通类内部可以不用实现
// 注意：抽象类不能被实例化！！！
// 注意类中的方法定义是：方法名(){}
abstract class Person {
  abstract myname: string
  abstract getName(): string
  getAge() {
    return 111
  }
}

class M extends Person {
  myname: string = 'xxx'
  getName() {
    return ''
  }
}

let m = new M()
console.log(m.getAge())

// 接口在类中的使用
interface PerItf {
  myname: string
  getName: () => string
}

class Fe implements PerItf {
  myname = 'ssss'
  getName() {
    return 'sss'
  }
}
let fe = new Fe()
console.log(fe.getName())
