/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {

    let _num = num.toString(), length = _num.length;

    if( 1 === length ){
        return 9;
    }

    for( let i=0; i<=length-1; ++i ){

        if( '6' === _num[i] ){
            return num + 3*Math.pow(10, length-1-i);
        }
    }

    return num ;
};