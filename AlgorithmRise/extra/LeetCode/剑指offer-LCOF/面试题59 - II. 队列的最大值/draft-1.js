var MaxQueue = function() {

    this.queue = [];
    this.maxStack = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {

    let length = this.maxStack.length;
    return !length ? -1 : this.maxStack[length-1];
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {

    let length = this.maxStack.length;
    if(!length || value >= this.maxStack[length-1]){
        this.maxStack.push(value);
    }
    this.queue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    
    let val = this.queue.pop();


    return val;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */