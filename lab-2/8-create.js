"use strict";

const createUser = (name, city) => ({
  name,
  city,
});

console.log(createUser("Ilona", "Tokyo"));

module.exports = { createUser };