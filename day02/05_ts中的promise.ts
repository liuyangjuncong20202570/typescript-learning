export {}
// 定义接口

// 定义data接口
interface dataItf {
  a: number
  b: string
}

interface promiseItf {
  code: number
  // data: { a: number; b: string }[] 除了这种直接定义的写法，还可以再定义一个接口来规定data的写法
  data: dataItf[]
  message: string
}

// 首先定义一个promise对象
// 将定义的接口赋给对象p，并使用泛型的形式
let p: Promise<promiseItf> = new Promise((res, rej) => {
  res({
    code: 0,
    data: [
      { a: 0, b: 'xxx' },
      { a: 1, b: 'xxxx' }
    ],
    message: ''
  })
})

// 如果直接使用js中的写法，报错，所以我们需要定义接口来规定Promise对象p的结构
p.then((res) => {
  if (res.code === 0) {
    res.data.map((item) => {
      console.log(item.a)
    })
  }
})
