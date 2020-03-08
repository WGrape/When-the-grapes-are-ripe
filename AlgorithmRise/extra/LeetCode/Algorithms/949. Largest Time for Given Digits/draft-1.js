Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    
    A.sort((a,b)=>a-b);

    let h, m, i, s;
    for(let i of [0,1,2,3]){

        let index;
        if(0 == i){
            if( (index = A.indexOf(2)) > -1 ){
                h = 2;
            }else if( (index = A.indexOf(1)) > -1 ){
                h = 1;
            }else if( (index = A.indexOf(0)) > -1 ){
                h = 0;
            }else{
                return "";
            }
        }else if(1 == i){

            if(2 == h){
                if( (index = A.indexOf(3)) > -1 ){
                    m = 3;
                }else if( (index = A.indexOf(2)) > -1 ){
                    m = 2;
                }else if( (index = A.indexOf(1)) > -1 ){
                    m = 1;
                }else if( (index = A.indexOf(0)) > -1 ){
                    m = 0;
                }else{
                    return "";
                }
            }else{
                index = A.length-1;
                m = A[index];
            }
        }else if(2 == i){

        }else{

        }

        A.remove(index);
    }


    if(false === h || false === m || false === i || false === s){
        return "";
    }

    return H+m+":"+i+s;
};