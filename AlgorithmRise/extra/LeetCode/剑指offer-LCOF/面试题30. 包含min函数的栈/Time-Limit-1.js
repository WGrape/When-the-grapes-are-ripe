/**
 * initialize your data structure here.
 */
var MinStack = function() {
    
    this.stack = [];
    this.stack_sorted = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    
    this.stack.push(x);
    this.sort();
};

MinStack.prototype.sort = function(){

    this.stack_sorted = Object.assign([], this.stack);
    this.stack_sorted.sort((a,b) => a-b);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
    this.stack.pop();
    this.sort();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {

    let length = this.stack.length;
    return this.stack[ length-1 ];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    
    if( !this.stack_sorted.length ){
        return null;
    }
    return this.stack_sorted[0];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */