/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {

    let words = text.split(" ").filter(String);
    let result = [], pre = "";

    for(let i = 0; i<=words.length-1;){

        let word = words[i];

        if(first == pre && second == word && words[i+1]){
            result.push(words[i+1]);
        }

        pre = word;
        ++i;
    }

    return result;
};