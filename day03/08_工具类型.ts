export {}
// partial适用于接口和类型
interface PItf {
  name: string
  age: number
}

type PType = {
  name: string
  age: number
}
// 需求：在不改变PItf接口的情况下，令该接口中的每一个属性变为可缺省的
// type Partial<T> = { [P in keyof T]?: T[P] | undefined; }
/*
=>{
  name?:string|undefined
  age?:number|undefined
}
*/
// 把<>中的接口或者类型别名设置为可缺省的
let obj: Partial<PItf> = {
  // name: 'xxx',
  age: 18
}

let obj2: Partial<PType> = {
  // name: 'xxx',
  age: 15
}
