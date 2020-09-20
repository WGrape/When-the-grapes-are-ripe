/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    
    let letters = chars.split(""), hash = {};
    for(let letter of letters){

        if(!hash[letter]){
            hash[letter] = 0;
        }
        ++hash[letter];
    }

    let result = [];
    for(let word of words){

        let _hash = JSON.parse(JSON.stringify(hash)), match = true;
        for(let c of word){
            if(_hash[c]){
                --_hash[c];
            }else{
                match = false;
                break;
            }
        }
        if(match){
            result.push(word);
        }
    }
    return result.join("").length;
};