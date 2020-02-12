/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    
    stones.sort((a, b) => b-a );
    
    while(stones.length > 0){
          
        if(1 === stones.length){
            
            return stones[0];
        }
        
        let x = stones[0], y = stones[1], cancel = x-y;
        
        stones = stones.slice(2);
        
        if(x === y){
           continue; 
        }

        stones.push(cancel);
        stones.sort( (a, b) => b-a );
    }
    
    return 0;
};