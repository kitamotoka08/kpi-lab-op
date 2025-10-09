'use strict';

/* With number */
const incNum = (n) => ++n;

const a = 5;
const b = incNum(a);

console.dir({ a, b });

/* With object */
const incObj = (num) => num.n++;

const obj = { n: 5 };
incObj(obj);

console.log(obj);

module.exports = { incNum, incObj };