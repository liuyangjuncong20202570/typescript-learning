import { type } from 'os'
export {}
// 接口定义函数
interface FnItf {
  (p: string): void
}

let fn: FnItf = (p: string) => {
  console.log(p)
}
fn('hhh')

// 类型别名定义函数
type FnType = (p: string) => void

let fntype: FnType = (p: string) => {
  console.log(p)
}
fntype('wsnd')

// 当对象内部有函数时用接口进行定义
interface ObjItf {
  // fn: (p: string) => void 可以重新定义内部函数结构
  fn: FnItf // 也可以直接使用之前已经定义的接口结构
}

let obj: ObjItf = {
  fn: (p: string) => {
    console.log(p)
  }
}
obj.fn('我是憨批')

// 当对象内部有函数时用类型别名进行定义
type ObjType = {
  // fn: FnItf 可以用之前定义的接口结构
  // fn: (p: string) => void  可以定义新的函数结构
  fn: FnType // 可以用之前定义的类型别名
}

let obj2: ObjType = {
  fn: (p: string) => {
    console.log(p)
  }
}
obj2.fn('我不是憨批')
