
var MaxQueue = function() {

    this.queue = [];
    this.dequeue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    return !(this.dequeue.length) ? -1 : this.dequeue[0];
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {

    // 保持dequeue的单调递减(允许相等: 如[4,3,3,3,3,2])
    while( this.dequeue.length && this.dequeue[ this.dequeue.length-1 ] < value ){
        this.dequeue.pop();
    }
    this.dequeue.push(value);

    this.queue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {

    if(!this.queue.length){
        return -1;
    }

    let value = this.queue.shift();
    if(value == this.dequeue[0]){
        this.dequeue.shift();
    }

    return value;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */