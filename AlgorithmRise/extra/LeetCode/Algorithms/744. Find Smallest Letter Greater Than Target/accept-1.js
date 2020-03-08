/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    
    letters.sort((a,b)=>a.charCodeAt()-b.charCodeAt());

    for( let letter of letters ){
        if(letter > target){
            return letter;
        }
    }

    return letters[0];
};