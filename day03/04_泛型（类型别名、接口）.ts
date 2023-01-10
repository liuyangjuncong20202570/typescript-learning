export {}
// 类型别名
type StrorNumber = string | number
type ObjType<A, N> = { age: A; getName: () => N }
let obj: ObjType<StrorNumber, StrorNumber> = {
  age: 18,
  getName: () => {
    return 'xx'
  }
}

//针对接口的泛型
interface ObjItf<T, G, P> {
  score: T
  getAge: (p: P) => G
}

let obj2: ObjItf<string, boolean, number> = {
  score: '好学生',
  getAge: (age: number) => {
    return true
  }
}
