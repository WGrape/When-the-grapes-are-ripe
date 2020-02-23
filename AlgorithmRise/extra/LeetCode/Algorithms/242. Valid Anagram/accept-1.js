String.prototype.sortSelf = function(str){
    let arr = str.split("");
    arr.sort((a,b)=>{
        return b.charCodeAt() - a.charCodeAt();
    });
    return arr.join("");
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s = s.sortSelf(s);
    t = t.sortSelf(t);
    
    return s === t;
};