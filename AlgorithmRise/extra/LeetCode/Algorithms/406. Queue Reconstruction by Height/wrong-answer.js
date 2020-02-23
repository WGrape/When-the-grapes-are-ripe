Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};
  
  /**
   * @param {number[][]} people
   * @return {number[][]}
   */
  var reconstructQueue = function(people) {
  
      let queue = [];
  
      // 以h降序, k升序为标准排列数组
      people.sort(function(a, b) {
          if(a[0] < b[0]){
              return 1;
          }
          if( a[0] > b[0] ){
              return -1;
          }
      });
  
      for( let item of people ){
          queue.insert(item[1], item);
      }
  
      return queue;
  };

// 这里错误就是因为排序的时候排错了, 必须严格按照 以h降序, k升序为标准排列数组