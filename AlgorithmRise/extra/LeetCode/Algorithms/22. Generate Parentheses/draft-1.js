var insertStr = function(soure,start, newStr){
    return soure.slice(0, start) + newStr + soure.slice(start)
  }
  
  let dp = [ [] ], hash = {};
  
  var init = function(){
      for( let i = 1; i<=10; ++i ){
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
  }
  init();
  
  console.log(dp);
  
  /**
   * @param {number} n
   * @return {string[]}
   */
  var generateParenthesis = function(n) {
  
      return dp[n];
  };