"use strict";

const pipe = (...fns) => {
  for (const f of fns) {
    if (typeof f !== "function") {
      throw new Error("All arguments must be functions");
    }
  }
  return (x) => fns.reduce((v, f) => f(v), x);
};

module.exports = { pipe };