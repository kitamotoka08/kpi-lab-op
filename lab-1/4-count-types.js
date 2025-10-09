'use strict';

const countDataTypes = (arr) => {
    const counters = {};
    for (const item of arr) {
        const type = typeof item;
        //console.log(type); 
        const count = counters[type] || 0;
        // console.log(count);
        counters[type] = count + 1;
    }
    return counters;
};

const arrey = [true, 'hello', 5, 12, -200, false, false, 'word'];
countDataTypes(arrey);

console.log(countDataTypes(arrey));

module.exports = { countDataTypes };