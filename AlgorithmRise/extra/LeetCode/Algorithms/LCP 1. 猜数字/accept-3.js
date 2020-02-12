/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function(guess, answer) {
    
    let count = 0;
    
    if( answer[0] === guess[0] ){
            ++count;
    }

    if( answer[1] === guess[1] ){
            ++count;
    }

    if( answer[2] === guess[2] ){
            ++count;
    }

    return count;
};