/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {

    let arr1 = version1.split('.');
    let arr2 = version2.split('.');

    for(let i = 0, j =0; i<=arr1.length-1 || j<=arr2.length-1; ++i,++j){

        let a = parseInt(arr1[i]);
        let b = parseInt(arr2[i]);
        if(i<=arr1.length-1 && j<=arr2.length-1){
            if(a == b){
                continue;
            }
            return a > b ? 1 : -1;
        }else{

            if(0 == a || 0 == b){
                continue;
            }
            return a ? 1 : -1;
        }
    }

    return 0;
};