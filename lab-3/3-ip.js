"use strict";

const ipToInt = (ip) => {

    return ip.split(".")
        .map(Number)
        .reduce((acc, byte) => (acc << 8) + byte);
};

console.log(ipToInt('192.168.1.10'))

module.exports = { ipToInt };