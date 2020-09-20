/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    let hash = {};
    for(let c of magazine){
        
        if(!hash[c]){
            hash[c] = 0;
        }
        ++hash[c];
    }

    for(let c of ransomNote){
        if(!hash[c]){
            return false;
        }
        --hash[c];
    }

    return true;
};