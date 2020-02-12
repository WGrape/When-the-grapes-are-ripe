let s = "abcdefghijklmnopqrstuvwxyz", p_global, p_global_length;

let s_arr = s.split('');

let flag = {} , flag_xy = {};

function get_dp_xy(x, y){
    
    let dp_xy = 0, index = 0, end = 0;
    
    if(x === y){
       
        x = p_global[x];
        index = x.charCodeAt() - 97;
        if(!flag[ index +'-'+ index ]){
           dp_xy = 1;
        }
        flag[ index +'-'+ index ] = 1;
        
        return dp_xy;
    }
    
    if( y-x > 1 ){
       
        return get_dp_xy(x, y-1) * get_dp_xy(y-1, y);
    }
    
    x = p_global[x];
    y = p_global[y];

    index = x.charCodeAt() - 97;
    end = (index+1)%s.length;
    
    if(x === s_arr[ index ] && y === s_arr[ end ]){
     
        dp_xy = 1;
    }
    
    return dp_xy;
}

/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
    
    if('' === p){
       return 0;
    }
    
    flag = {} ; 
    flag_xy = {};
    p_global = p;

    let length = p.length, dp = [];
    
    p_global_length = length;
    
    for(let i=0; i<=length-1; ++i){

        let dp_xy = 0;
                
        for(let j=0; j<=i; ++j){
            
            x = p_global[j];
            y = p_global[i];
            let r = get_dp_xy(j, i);
            
            if( !flag_xy[ x +'-'+ y ] && r ){

                dp_xy += r;
                flag_xy[ x +'-'+ y ] = 1;
            }
        }
        
        dp[i] = ( dp[i-1] ? dp[i-1] : 0 ) + dp_xy;
    }
      
    // console.log(flag_xy);
    // console.log(dp);
    
    return dp[length-1];
};