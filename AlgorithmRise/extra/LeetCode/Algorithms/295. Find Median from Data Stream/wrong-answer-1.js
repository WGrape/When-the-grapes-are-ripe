/**
 * initialize your data structure here.
 */
var MedianFinder = function() {

    this.count = 0;
    this.sum = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.sum += num;
    ++this.count;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    return this.sum / this.count;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */