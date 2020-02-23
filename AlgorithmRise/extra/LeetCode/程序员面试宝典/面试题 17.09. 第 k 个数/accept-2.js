/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function(k) {

    let arr = [0,1,3,5,7];
    let map = [];
    map[0] = 1;
    map[1] = 1;
    map[3] = 1;
    map[5] = 1;
    map[7] = 1;

    if(k<=4){
        return arr[k];
    }

    let index_a = 2, index_b = 3, index_c = 4;
    while(1){
        let stack = [];
        factors = [3,5,7];
        for(let factor of factors){
            let a = arr[index_a]*factor;
            let b = arr[index_b]*factor;
            let c = arr[index_c]*factor;
            if( !map[a] ){
                map[a] = 1;
                stack.push(a);
            }
            if( !map[b] ){
                map[b] = 1;
                stack.push(b);
            }
            if( !map[c] ){
                map[c] = 1;
                stack.push(c);
            }
        }
        index_a += 3;
        index_b += 3;
        index_c += 3;
        arr = arr.concat(stack);
        arr.sort((a,b)=>a-b);
        if(arr.length>k+100){
            break;
        }
    }

    return arr[k];
};