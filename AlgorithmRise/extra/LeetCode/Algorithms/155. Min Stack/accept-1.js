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
    
    this.stack[ this.stack.length ] = x;
    
    this.stack_sorted[ this.stack_sorted.length ] = x;
    this.stack_sorted.sort( (a,b) => a-b );
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
    let top = this.stack[ this.stack.length-1 ];
    this.stack.splice(this.stack.length-1, 1);
    for(let i =0; i<=this.stack_sorted.length-1; ++i){
        
        if(top === this.stack_sorted[i]){
            this.stack_sorted.splice(i, 1);break;
        }
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
MinStack.prototype.getMin = function() {
    
    return this.stack_sorted[0];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */