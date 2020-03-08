/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {

    let _a = a.split("+")[0], _b = a.split("+")[1].split("i")[0];
    let _c = b.split("+")[0], _d = b.split("+")[1].split("i")[0];

    a = _a*_c - _b*_d;
    b = _a*_d + _b*_c;

    return a+"+"+b+"i";
};