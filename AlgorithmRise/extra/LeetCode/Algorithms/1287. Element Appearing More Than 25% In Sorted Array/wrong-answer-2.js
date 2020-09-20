/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {

    let length = arr.length;
    let times = Math.ceil(0.25*length);
    let hash = [];
    for( let num of arr ){
        
        if(!hash[num]){
            hash[num] = 0;
        }
        ++hash[num];
        if(hash[num] > times){
            return num;
        }
    }
};