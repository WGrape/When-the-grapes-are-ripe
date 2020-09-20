var visitFrom1 = function(flowerbed, i, n){

}

var visitFrom0 = function(flowerbed, i, n){
    
}

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    
    let length = flowerbed.length;

    if( 1 === flowerbed[0] ){

        return visitFrom1();
    }else{

        return visitFrom0(flowerbed, 0, n);
    }
};