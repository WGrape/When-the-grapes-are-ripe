/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {

    let count = 0, num = 7;
    for( let c of text ){

        if( -1 < ["b", "a", "l", "o", "n"].indexOf(c) ){
            --num;
        }

        if( !num ){
            ++count;
            num = 7;
        }
    }

    return count;
};