'use strict';
const myFn = () => {
    const constObj = {
        name: 'Ilona',
    };
    let letObj = {
        name: 'Ilonka',
    };
    console.dir(constObj, letObj);
    constObj.name = 'Ilonka';
    letObj.name = 'Ilona';

    console.dir(constObj, letObj);

    //personConst = { name: 'Alice' };
    letObj = { name: "Elena" };

    console.dir(constObj, letObj);
};

myFn();

module.exports = { myFn };