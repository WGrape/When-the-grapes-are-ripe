function rtrim(str){  //删除右边的空格
    return str.replace(/(\s*$)/g,"");
   }
   
   /**
    * @param {string} s
    * @return {string[]}
    */
   var printVertically = function(s) {
       
       let stack = [], index = 0;
       let arr = s.split(" ").filter(String);
   
       while(1){
   
           let str = "", end = true;
           for(let word of arr){
   
               if(word[index]){
                   end = false;
                   str += word[index];
               }else{
                   str += " ";
               }
           }
   
           if(end){
               break;
           }
   
           ++index;
           stack.push( rtrim(str) );
       }
   
       return stack;
   };