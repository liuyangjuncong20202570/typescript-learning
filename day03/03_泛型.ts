// 泛型可以看作是给类型传参，因为一开始并不确定函数的参数类型
// 所以一开始可以使用泛型来进行占位操作，在进行函数调用时再给泛型赋具体的参数类型
export {}
function fn<T, G>(n: T, m: G): T {
  return n
}

fn<number, string>(12, '12')
