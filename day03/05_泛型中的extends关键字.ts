export {}
interface ObjItf<T extends string | number, G> {
  name: T
  getName: () => G
}

// 如果在泛型中使用了extends关键字，那么该泛型的类型选择就被固定为extends关键字后面的类型
let obj: ObjItf<string, number> = {
  name: 'zs',
  getName: () => 1
}
