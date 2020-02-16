/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    
    let length = candies.length, kinds = 0, map = [];
    for( let i = 0; i<=length-1; ++i ){

        let index = candies[i];

        if(!map[index]){
            map[index] = 0;
        }

        ++map[index];

        if( !(map[index] % 2) ){

            ++kinds;
        }
    }

    return kinds;
};