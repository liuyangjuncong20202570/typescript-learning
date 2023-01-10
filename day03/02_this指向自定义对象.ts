export {}

// 此处，我想指定example中的this指向obj这个对象
// 我认为ts中的this指向是根据其类型进行判断的
// 也就是this的类型和哪一个对象的类型如果相同,那么this就指向该对象
// 所以我如果在此处声明一个接口或者类型别名给obj和this，就做到了将this执行obj
// 声明接口：
interface ObjItf {
  myname: string
  person: (p: string) => void
}
let obj: ObjItf = {
  myname: 'wsnd',
  person: () => {}
}

function example(this: ObjItf | Window, name: string) {
  console.log(this)

  this.myname = name
}
// 此时我们已经将this指向了obj，之后我们需要将定义的example挂载到obj上
// 因为如果此时我去访问obj.person的话是访问不到我定义的example的
obj.person = example
obj.person('你是煞笔')
window.person = example
window.person('xxx')
console.log(obj.myname)
// this也可指向联合类型，用|连接，首先需要保证类型中有定义所需属性和函数
