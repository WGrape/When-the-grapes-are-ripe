let s = "abcdefghijklmnopqrstuvwxyz", p_global, p_global_length;

let s_arr = s.split('');

let flag = {};

function get_dp_xy(x, y){
    
    let dp_xy = 0;
    
    if(x === y){
       
        dp_xy = 1;
        x = p_global[x];
        y = p_global[y];
        if(flag[ x +'-'+ y ]){
            dp_xy = 0;
        }
        flag[ x +'-'+ y ] = 1;
        return dp_xy;
    }
    
    if( y-x > 1 ){
       
        return get_dp_xy(x, y-1) * get_dp_xy(y-1, y); 
    }
    
    x = p_global[x];
    y = p_global[y];

    let index = x.charCodeAt() - 97;
    if(x === s_arr[ index ] && y === s_arr[ (index+1)%s.length ]){
     
        dp_xy = 1;
    }
    
    flag[ x +'-'+ y ] = 1;
    
    return dp_xy;
}

/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
    
    p_global = p;

    let length = p.length, dp = [];
    
    p_global_length = length;
    
    for(let i=0; i<=length-1; ++i){

        let dp_xy = 0;
        for(let j=0; j<=i; ++j){
            
            dp_xy += get_dp_xy(j, i);
        }
        dp[i] = ( dp[i-1] ? dp[i-1] : 0 ) + dp_xy;
    }
    
    console.log(flag);
    
    return dp[length-1];
};



















let s = "abcdefghijklmnopqrstuvwxyz", p_global, p_global_length;

let s_arr = s.split('');

let flag = {} ;

function get_dp_xy(x, y){
    
    let dp_xy = 0, index = 0, end = 0;
    
    if(x === y){
       
        dp_xy = 1;
        x = p_global[x];
        y = p_global[y];
        
        index = x.charCodeAt() - 97;
        
        if(flag[ index +'-'+ index ]){
            
            return 0;
        }
        
        flag[ index +'-'+ index ] = 1;
        
        return dp_xy;
    }
    
    if( y-x > 1 ){
       
        let r = get_dp_xy(x, y-1) + get_dp_xy(y-1, y);
        return r >=1 ? 1 : 0;
    }
    
    x = p_global[x];
    y = p_global[y];

    index = x.charCodeAt() - 97;
    end = (index+1)%s.length;
    
    if(x === s_arr[ index ] && y === s_arr[ end ]){
     
        if( flag[ index +'-'+ end ] ){
    
            dp_xy = 0;
        }else{
            
            dp_xy = 1;
            flag[ index +'-'+ end ] = 1;
        }
    }
    
    return dp_xy;
}

/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
    
    p_global = p;

    let length = p.length, dp = [];
    
    p_global_length = length;
    
    for(let i=0; i<=length-1; ++i){

        let dp_xy = 0;
        for(let j=0; j<=i; ++j){
            
            dp_xy += get_dp_xy(j, i);
        }
        dp[i] = ( dp[i-1] ? dp[i-1] : 0 ) + dp_xy;
    }
    
    console.log(flag);
    
    // return dp[length-1];
    return Object.getOwnPropertyNames(flag).length;
};

















let s = "abcdefghijklmnopqrstuvwxyz", p_global, p_global_length;

let s_arr = s.split('');

let flag = {} , flag_xy = {}, flag_xy_global;

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
     
        if( flag_xy_global[ index +'-'+ end ] ){
    
            dp_xy = 0;
        }else{
            
            dp_xy = 1;
            flag_xy[ index +'-'+ end ] = 1;
        }
    }
    
    return dp_xy;
}

/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
    
    p_global = p;

    let length = p.length, dp = [];
    
    p_global_length = length;
    
    for(let i=0; i<=length-1; ++i){

        let dp_xy = 0;
        
        flag_xy = {} ;
        
        for(let j=0; j<=i; ++j){
            
            dp_xy += get_dp_xy(j, i);
        }
        
        flag_xy_global = JSON.parse(JSON.stringify(flag_xy));
        dp[i] = ( dp[i-1] ? dp[i-1] : 0 ) + dp_xy;
    }
  
    // return Object.getOwnPropertyNames(flag).length;
    
    console.log(dp);
    
    return dp[length-1];
};



// "aaanajakanahgaaasagauayaaxcsuscycgsahduasdaassfhsaudasdasfasdesffsgewhiujk"
// "a"
// "cac"
// "zzzzazzzaaaaazzza"
// "ede"
// "zaefffcazaz"
// "dbjkasdnmkalsdnsajkdnbjsadnaskjdnajskdnajksndjasndjksandkjasn"
// "zab"
// ""
// "azazaza"
// "bdhjksaidjkas"
// "abcdabcdabcd"
// "eeesceceadda"