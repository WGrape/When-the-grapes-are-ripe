let table = [];
table[0] = 0; // 0以内的质数多少个(包含0)
table[1] = 0; // 1以内的质数多少个(包含1)
table[2] = 1; // 2以内的质数多少个(包含2)
table[3] = 2; // 3以内的质数多少个(包含3)
table[4] = 2; // 4以内的质数多少个(包含4)
table[5] = 3; // 5以内的质数多少个(包含5)
table[6] = 3; // 6以内的质数多少个(包含6)
table[7] = 4; // 7以内的质数多少个(包含7)

var isPrime = function(n){
    let end = Math.sqrt(n);
    for( let i = 2; i<=end; ++i ){
        if( 0 == n%i ){
            return false;
        }
    }
    return true;
}

for( let i = 8; i<=1500000; ++i ){
    
    // 之所以不写4,6,8,9是因为它们已经是2和3的倍数了
    // 之所以这样写, 是因为会发现这几个数的倍数一定不是素数
    if( 0 == i%2 || 0 == i%3 || 0 == i%5 || 0 == i%7 ){
        table[i] = table[i-1];
    }else{
        table[i] = ( isPrime(i) ) ? table[i-1] +1 : table[i-1];
    }
}

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {

    return table[n-1] ? table[n-1] : 0;
};