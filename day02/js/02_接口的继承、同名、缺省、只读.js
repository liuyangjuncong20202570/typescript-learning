"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ex = {
    name: '张三',
    age: 18,
    score: 100
};
console.log(ex);
// 当出现同名的接口，后面的同名接口相当于在补充前面的接口
let a = {
    name: 'zs',
    age: 18
};
console.log(a);
let b = {
    b: 'wsnd' // a属性可以被省略，但b不行
};
console.log(b);
let c = {
    c: 18,
    d: 'wsnd'
};
console.log(c);
// c.c = 20 此句报错，因为c为只读属性
