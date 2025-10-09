'use strict';

const generateKey = (length, characters) => {
    const base = characters.length;

    let key = '';

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * base);
        key += characters[index];
    }
    console.log(key);
    return key;
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
generateKey(16, characters);
// console.log(key);

module.exports = { generateKey };