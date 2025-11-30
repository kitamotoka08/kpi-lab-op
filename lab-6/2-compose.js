"use strict";

const compose = (...fns) => {
  const arr = [];

  const composed = (x) => {
    if (fns.length === 0) return x;
    const last = fns.length - 1;
    let res = x;
    try {
      for (let i = last; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } catch (error) {
      for (const item of arr) {
        item(error);
      }
      return null;
    }
  };
  composed.on = (name, item) => {
    if (name === "error") arr.push(item);
  };
  return composed;
};
module.exports = { compose };