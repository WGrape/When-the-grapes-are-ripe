/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {

    let stack = [], continuity = 0, length = arr.length;
    for( let j = 0; j<=length-1; ++j ){
        if( !j || arr[j-1] == arr[j] ){
            ++continuity;
            continue;
        }
        stack.push(continuity);
        continuity = 1;
    }
    if( continuity ){
        stack.push(continuity);
    }

    console.log(stack);
    
    let sum = count = 0;
    for(let num of stack){
        ++count;
        sum += num;
        if( sum >= length/2 ){
            break;
        }
    }

    return count;
};


