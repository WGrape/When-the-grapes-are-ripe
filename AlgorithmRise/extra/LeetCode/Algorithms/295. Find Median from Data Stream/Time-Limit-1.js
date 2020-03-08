/**
 * initialize your data structure here.
 */
var MedianFinder = function() {

    this.stack = [];
    this.count = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.stack.push(num);
    ++this.count;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    this.stack.sort((a,b)=>a-b);
    if( this.count % 2 ){
        return this.stack[ this.count>>1 ];
    }
    let num1 = this.stack[ this.count>>1 ];
    let num2 = this.stack[ (this.count>>1) - 1 ];
    return (num1 + num2)/2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */