/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {

    let _a = a.split("+")[0], _b = a.split("+")[1].split("i")[0];
    let _c = b.split("+")[0], _d = b.split("+")[1].split("i")[0];

    let A = _a*_c - _b*_d;
    let B = _a*_d + _b*_c;

    return A + "+" + B + "i";
};