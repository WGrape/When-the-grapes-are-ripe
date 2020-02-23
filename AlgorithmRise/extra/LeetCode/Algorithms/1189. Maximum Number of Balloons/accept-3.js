/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {

    let stack = [0,0,0,0,0];
    for( let c of text ){

        switch(c){
            case "b":
                ++stack[0];
                break;
            case "a":
                ++stack[1];
                break;
            case "l":
                ++stack[2];
                break;
            case "o":
                ++stack[3];
                break;
            case "n":
                ++stack[4];
                break;
            default:break;
        }
    }

    return Math.min( stack[0], stack[1], stack[2] >> 1, stack[3] >> 1, stack[4]);
};