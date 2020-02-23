var RecentCounter = function() {
    this.stack = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.stack.push(t);
    let stack = this.stack, length = stack.length;
    let i = 0, j = length-1;
    for( ; i<=j; ){
        let res = true;
        if( stack[i] < (t-3000) ){
            ++i;
            res = false;
        }
        if( stack[j] > t ){
            --j;
            res = false;
        }
        if(res){
            break;
        }
    }

    return (j-i)+1;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */