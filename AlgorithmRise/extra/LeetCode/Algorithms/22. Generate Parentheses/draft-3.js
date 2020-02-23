var insertStr = function(soure,start, newStr){
    return soure.slice(0, start) + newStr + soure.slice(start)
  }
  
  /**
   * @param {number} n
   * @return {string[]}
   */
  var generateParenthesis = function(n) {
  
      let stack = [], hash = {};
      let brackets = "()".repeat(n-1), length = brackets.length;
      for( let j = 0; j<=length; ++j ){
          let combination = insertStr(brackets, j, "()");
          if( !hash[combination] ){
              hash[combination] = 1;
              stack.push( combination );
          }
      }
      return stack;
  };