/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function(guess, answer) {
    
    let count = 0;
    for( let i = 0; i<=2; ++i ){

        if( answer[i] === guess[i] ){
            ++count;
        }
    }

    return count;
};