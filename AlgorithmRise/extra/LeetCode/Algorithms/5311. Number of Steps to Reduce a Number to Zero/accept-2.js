/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {

    let steps = 0;
    while(num){

        let r = num%2;
        if( r ){
            num -= 1;
        }else{
            num = num>>1;
        }

        ++steps;
    }

    return steps;
};