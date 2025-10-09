'use strict';

const phonebook = [
    { name: 'Egor', phone: '+380956728736' },
    { name: 'Mira', phone: '+380669573644' },
];

const findPhoneByName = (name) => {
    for (const obj of phonebook) {
        if (obj.name === name)
            return obj.phone;
    }
    return null;

};

console.log(findPhoneByName('Egor'));
console.log(findPhoneByName('Pryanik'))

module.exports = { phonebook, findPhoneByName };