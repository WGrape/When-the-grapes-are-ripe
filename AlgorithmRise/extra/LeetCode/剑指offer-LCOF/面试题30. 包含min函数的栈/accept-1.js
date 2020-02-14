/**
 * initialize your data structure here.
 */
var MinStack = function() {
    
    this.stack = [];
    this.min_stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {

    this.stack.push(x);
    if( x <= this.min_stack[ this.min_stack.length-1 ] || !this.min_stack.length ){
        this.min_stack.push(x);
    }  
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
    let x = this.stack.pop();
    if( x == this.min_stack[ this.min_stack.length-1 ] ){
        this.min_stack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    
    return this.stack[ this.stack.length-1 ];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {

    return this.min_stack[ this.min_stack.length-1 ];  
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */