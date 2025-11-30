"use strict";

const removeElement = (array, item) => {
  const i = array.indexOf(item);
  if (i !== -1) array.splice(i, 1);
};

const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(array1, 5);
console.log(array1);

const array2 = ["Kyiv", "Beijing", "Lima", "Saratov"];
removeElement(array2, "Lima"); 
removeElement(array2, "Berlin"); 
console.log(array2);


module.exports = { removeElement };