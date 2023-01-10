"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fn = (p) => {
    console.log(p);
};
fn('hhh');
let fntype = (p) => {
    console.log(p);
};
fntype('wsnd');
let obj = {
    fn: (p) => {
        console.log(p);
    }
};
obj.fn('我是憨批');
let obj2 = {
    fn: (p) => {
        console.log(p);
    }
};
obj2.fn('我不是憨批');
