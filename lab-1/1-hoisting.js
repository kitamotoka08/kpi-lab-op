'use strict';

const myFn = () => {
    console.log(a);
    var a = 5;
    console.log(a);
};

myFn();
module.exports = { myFn };


