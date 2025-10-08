'use strict';

const myFn = () => {
    console.dir({ a });
    var a = 5;
    console.log({ a });
};

myFn();
module.export = { myFn };


