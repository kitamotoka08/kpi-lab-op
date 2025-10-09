'use strict';

const phonebook = {
    Egor: '+380956728736',
    Mira: '+380669573644'
};

const findPhoneByName = (name) => phonebook[name];

console.log(findPhoneByName('Egor'));

module.exports = { phonebook, findPhoneByName };
// 10/10