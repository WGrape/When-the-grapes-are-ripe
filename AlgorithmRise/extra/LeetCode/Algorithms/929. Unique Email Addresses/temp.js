/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    var arr = [];
    
    var i=0, length = emails.length;
    
    while(i<=length-1){
        
        var key = "";
        var j =0, len = emails[i].length ;
        while( j<= len-1 ){
            
            if( '@' == emails[i][j] ){
                
                key += "@" + emails[i].slice(j+1);
                break;
            }
            
            if( '+' != emails[i][j] ){
                
                if( '.' == emails[i][j]){
                    
                    continue;
                }
                
                key += emails[i][j];   
            }
            
            ++j;
        }
        
        if( !isNaN( arr[key] ) ){
            
            arr[key] = 1;
        }else{
            
            ++arr[key];
        }
        
        ++i;
    }
    
    return arr.length;
    
};