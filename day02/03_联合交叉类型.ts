export {}
// 联合交叉类型
let obj:
  | ({ name: string } & { age: number })
  | ({ name: number } & { age: string })
// obj的类型要么是第一组要么是第二组，效果与let obj:{name:string|number}|{age:string|number}不一样，其未规定name与age是哪一组
obj = { name: 'zs', age: 18 }
obj = { name: 18, age: '18' }
