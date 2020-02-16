Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
  };
  
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  var findDisappearedNumbers = function(nums) {
      
      let stack = Object.keys(new Int8Array(10)).map(Number), length = nums.length;
      stack.push(length);
      for( let i = 0; i<=length-1; ++i ){
  
          let index = nums[i];
          stack.remove(index);
      }
      return stack;
  };