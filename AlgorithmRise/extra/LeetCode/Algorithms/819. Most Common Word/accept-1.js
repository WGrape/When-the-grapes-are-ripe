/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {

    paragraph = paragraph.replace(/\!/g, ' ');
    paragraph = paragraph.replace(/\./g, ' ');
    paragraph = paragraph.replace(/\?/g, ' ');
    paragraph = paragraph.replace(/\'/g, ' ');
    paragraph = paragraph.replace(/,/g, ' ');
    paragraph = paragraph.replace(/;/g, ' ');
    paragraph = paragraph.replace(/\s+/g, ' ');

    let words = paragraph.split(' ').filter(String), hash = {}, max = 0, result = "";
    console.log(words);
    for(let word of words){

        let _word = word.toLowerCase();
        hash[_word] = hash[_word] ? hash[_word] + 1 : 1;

        // 一定要写等号, 因为会出现前一个在黑名单的情况, 这时候就需要后一个了
        if(hash[_word] >= max){
            if( banned.indexOf(_word) < 0 ){
                max = hash[_word];
                result = _word;
            }
        }
    }

    return result;
};