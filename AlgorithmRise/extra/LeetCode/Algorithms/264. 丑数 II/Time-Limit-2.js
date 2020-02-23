/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {

    let arr = [0,1,2,3,4,5];

    let hash = [], index_a = 2, index_b = 3, index_c = 5;
    hash[4]=1;

    for( let i = 6; i<=n; ++i ){

        let stack = [];
        for( let factor of [2,3,5]){

            let a = arr[index_a]*factor;
            let b = arr[index_b]*factor;
            let c = arr[index_c]*factor;
            if( !hash[a] ){
                hash[a] = 1;
                arr.push(a);
            }
            if( !hash[b] ){
                hash[b] = 1;
                arr.push(b);
            }
            if( !hash[c] ){
                hash[c] = 1;
                arr.push(c);
            }
        }
        ++index_a;
        ++index_b;
        ++index_c;
        // arr = arr.concat(stack);
        arr.sort((a,b)=>a-b);
    }

    return arr[n];
};