/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {

    if(!S.length){
        return "";
    }

    let pre = S[0], str = '', continuous = 0;
    for(let i = 0; i<=S.length-1; ++i){

        if(pre != S[i]){
            str += ( pre + continuous );
            continuous = 0;
        }

        pre = S[i];
        ++continuous;
    }
    if(continuous){
        str += ( pre + continuous );
    }

    if(str.length>=S.length){
        return S;
    }

    return str;
};