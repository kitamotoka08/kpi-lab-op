"use strict";

const range = (start, end) => {
    const arr = [];

    for (let r = start; r <= end; r++) {
        if (r % 2 !== 0) {
            arr.push(r);
        }
    }
    return arr;
};

const array = range(15, 30);
console.log(array);

module.exports = { range };