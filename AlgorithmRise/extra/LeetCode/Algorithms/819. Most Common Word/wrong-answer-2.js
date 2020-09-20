/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {

    paragraph = paragraph.replace('!', '');
    paragraph = paragraph.replace('.', '');
    paragraph = paragraph.replace('?', '');
    paragraph = paragraph.replace("'", '');
    paragraph = paragraph.replace(',', '');
    paragraph = paragraph.replace(';', '');
    paragraph = paragraph.replace(/\s+/, ' ');

    let words = paragraph.split(' '), hash = {}, max = 0, result = "";
    for(let word of words){

        let _word = word.toLowerCase();
        hash[_word] = hash[_word] ? hash[_word] + 1 : 1;

        // 一定要写等号, 因为会出现前一个在黑名单的情况, 这时候就需要后一个了
        if(hash[_word] >= max){
            max = hash[_word];
            if( banned.indexOf(_word) < 0 ){
                result = _word;
            }
        }
    }

    return result;
};