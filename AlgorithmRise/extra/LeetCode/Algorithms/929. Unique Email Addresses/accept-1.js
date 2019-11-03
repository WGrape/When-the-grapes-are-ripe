/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    var arr = [];

    var localName='', domainName='';
    
    var i=0, length=emails.length;
    while(i<=length-1){
        
        var temp = emails[i].split('@');
        localName = temp[0];
        domainName = temp[1];
        
        var j=0,len=localName.length, key='';
        while(j<=len-1){
            
            if( '+'== localName[j] ){
                
                break;
            }
            
            if( '.' != localName[j] ){
                
                key += localName[j];
            }
            
            ++j;
        }
        
        arr[key+"@"+domainName] = 1;
        
        ++i;
    }
    
    // return arr.length; 错误，因为 arr["XXXX"] = "" 其实定义的是把 arr 当成对象了
    
    var count=0;
    for(key in arr){
        ++count;
    }
    
    return count;
    
};