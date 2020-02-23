/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {

    let stack = [0,0,0,0,0];
    for( let c of text ){

        if( "b" == c ){
            ++stack[0];
        }else if( "a" == c ){
            ++stack[1];
        }else if( "l" == c ){
            ++stack[2];
        }else if( "o" == c ){
            ++stack[3];
        }else if( "n" == c ){
            ++stack[4];
        }
    }

    return Math.min( stack[0], stack[1], Math.floor(stack[2]/2), Math.floor(stack[3]/2), stack[4]);
};