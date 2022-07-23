module.exports = function reverse(n) {
    let numIntoStr = String(n);

    if (numIntoStr.startsWith("-")) {
        numIntoStr = numIntoStr.slice(1);
    }

    if (numIntoStr.endsWith("0")) {
        numIntoStr = numIntoStr.slice(0, -1);
    }
    return numIntoStr.split("").reverse().join("");
};
