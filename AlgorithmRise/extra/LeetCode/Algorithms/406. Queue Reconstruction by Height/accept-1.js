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
          
          // h降序
          if(a[0] < b[0]){
              return 1;
          }
          if( a[0] > b[0] ){
              return -1;
          }
  
          // k 升序
          return a[1]-b[1];
      });
  
      for( let item of people ){
          queue.insert(item[1], item);
      }
  
      return queue;
  };