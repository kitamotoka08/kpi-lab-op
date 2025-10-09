'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return min + Math.random() * (max - min + 1);
};
/* casino 777 js */
console.log(Math.floor(random(1, 7)), Math.floor(random(1, 7)), Math.floor(random(1, 7)));
console.log('coefficient:',random(1, 2).toFixed(1));
module.exports = { random };