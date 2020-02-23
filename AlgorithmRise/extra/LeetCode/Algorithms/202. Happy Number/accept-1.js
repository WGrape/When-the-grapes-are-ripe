/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    let hash = {};
    while(1 != n){

        // 此题重要的是需要判断 : 是否开始出现循环
        // 用hash来判断, 如果hash存在, 则说明出现循环了, 一旦出现循环, 就说明不是快乐数
        if(!hash[n]){
            hash[n] = 1;
        }else{
            return false;
        }
        
        let _n = 0;
        while(n){
            _n += (n%10)*(n%10);
            n = Math.floor(n/10);
        }
        n = _n;
    }

    return true;
};