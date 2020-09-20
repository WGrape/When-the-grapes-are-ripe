Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {

    let length = A.length;
    let index_a = index_b = 0;
    for( let i = 0; index_b<=n-1; ){

        // 已经扫完整个缓冲空间
        if(i>=m+n){
             A.insert(m+index_b, B[index_b]);
             ++index_b;
             i=0;
             A.splice(-1);
             continue;
        }

        // 仍在缓存空间内
        if( B[index_b] < A[i] ){
            A.insert(i, B[index_b]);
            ++index_b;
            i=0;
            A.splice(-1);
            continue;
        }

        ++i;
    }
};