// ts中如果出现了this一定要指明this的指向于谁，在函数的一个参数前指明
// interface Window {
//   myname: string
// }
// function person(this: Window, name: string) {
//   // ts中提供了Window类，window就是属于该类的一个对象
//   // 因为mynamw是我们自己定义的一个属性，所以我们需要将myuname挂载到Window上
//   // 所以需要借助interface的同名属性，补充Window类型
//   this.myname = name
// }

// window.person('wsnd')

// 当加上了export{}后
export {}
// 当加上了export{}后，该ts文件形成了单独的作用域，此时的Window接口就无法访问到全局Window接口
// 所以此时需要在global.d.ts中补充该接口
function person(this: Window, name: string) {
  // ts中提供了Window类，window就是属于该类的一个对象
  // 因为mynamw是我们自己定义的一个属性，所以我们需要将myuname挂载到Window上
  // 所以需要借助interface的同名属性，补充Window类型
  this.myname = name
}
// Window这个类在全局上我们已经为它补充好了person这个方法
// 接下来就需要我们使用Window类的实例window来将本作用域中定义的方法person挂载到全局方法person中
//   所以需要该句：window.person = person
window.person = person
window.person('xxx')
