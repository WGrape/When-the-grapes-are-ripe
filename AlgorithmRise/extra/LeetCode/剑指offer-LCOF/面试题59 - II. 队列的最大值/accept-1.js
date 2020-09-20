var MaxQueue = function() {

    this.queue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if(!this.queue.length){
        return -1;
    }

    let max = Number.NEGATIVE_INFINITY;
    for( let value of this.queue ){
        if(value>max){
            max = value;
        }
    }

    return max;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {

    this.queue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    
    if(!this.queue.length){
        return -1;
    }
    return this.queue.shift();
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */