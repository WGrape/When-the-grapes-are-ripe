var insertStr = function(soure,start, newStr){
    return soure.slice(0, start) + newStr + soure.slice(start)
  }
  
  /**
   * @param {string} S
   * @return {string[]}
   */
  var permutation = function(S) {
  
      // 动态规划
      let index = 0, dp = [], hash = {};
      for( let c of S ){
          if( !index ){
              dp[index] = c;
              ++index;
              continue;
          }
  
          let stack = [];
          for( let sequence of dp[index-1] ){
  
              let length = sequence.length;
              for( let i = 0; i<=length; ++i ){
  
                  let combination = insertStr( sequence, i, c );
                  if( !hash[ combination ] ){
                      hash[ combination ] = 1;
                      stack.push( combination );
                  }
              }
          }
  
          dp[index] = stack;
          ++index;
      }
  
      return dp[index-1];
  };