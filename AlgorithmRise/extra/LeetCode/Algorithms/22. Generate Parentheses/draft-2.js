var insertStr = function(soure,start, newStr){
    return soure.slice(0, start) + newStr + soure.slice(start)
  }
  
  /**
   * @param {number} n
   * @return {string[]}
   */
  var generateParenthesis = function(n) {
  
      let dp = [ [] ], hash = {};
      for( let i = 1; i<=n; ++i ){
          if( 1 == i ) {
              dp[i] = [ "()" ];
              continue;
          }
  
          let stack = [];
          for( let brackets of dp[i-1] ){
  
              let length = brackets.length;
              for( let j = 0; j<=length; ++j ){
                  
                  let combination = insertStr(brackets, j, "()");
                  if( !hash[combination] ){
                      hash[combination] = 1;
                      stack.push( combination );
                  }
              }
          }
          dp[i] = stack;
      }
  
      return dp[n];
  };

// n超过10时好像就会超时, 不过发现case中的预期答案也超时