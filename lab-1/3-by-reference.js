'use strict';

const myFn = (obj) => {
    if (typeof obj === 'object') {
        obj.n++;
    }
};
const obj = { n: 5 };
myFn(obj);
console.log(obj);
module.exports = { myFn };