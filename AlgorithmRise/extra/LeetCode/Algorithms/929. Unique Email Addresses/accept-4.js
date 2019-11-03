/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    var arr = [];

    var localName='', domainName='';
    
    emails.forEach(( email )=>{
        
        var temp = email.split('@');
        localName = ( temp[0].split('+') )[0];
        domainName = temp[1];
        
        localName = localName.split('.').join('');
        
       
        arr[localName+"@"+domainName] = 1;
    });
    
    
    // return arr.length; 错误，因为 arr["XXXX"] = "" 其实定义的是把 arr 当成对象了
    
    // 使用这个方法比自己遍历还要慢
    return Object.getOwnPropertyNames(arr).length-1;
    
};