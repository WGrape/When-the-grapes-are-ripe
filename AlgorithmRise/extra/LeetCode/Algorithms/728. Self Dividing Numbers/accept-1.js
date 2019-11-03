/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

var table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22];

// 打表
function printTable(){
   
    for(var num = 23;num<=10005;++num){
        
        if( isSelfDividing(num) ){
            
            table.push(num);
        }
    }
}


function isSelfDividing(num){
    
    var divisor = num;
    while( divisor != 0 ){
        
        var dividend = divisor%10;
        if( num % dividend != 0){
            
            return false;
        }
        
        divisor = Math.floor(divisor/10);
    }
    
    return true;
}

printTable();

var selfDividingNumbers = function(left, right) {
  
    var temp = [];
    table.forEach(function(num){
        
        if(num>=left&&num<=right){
            temp.push(num);
        }
    });
    
    return temp;
};



