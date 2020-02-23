var ProductOfNumbers = function() {
    this.stack = [];
    this.zeroIndex = false;
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    this.stack.push(num);
    if( false === this.zeroIndex && 0 == num ){
        this.zeroIndex = this.stack.length-1;
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    let res = 1, length = this.stack.length;
    
    if(this.zeroIndex && this.zeroIndex >= length-k){
        return 0;
    }
    
    for( let i = length-1; i>=length-k; --i){
        res *= this.stack[i];
    }
    return res;
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */