/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {

    let stock = [];
    for(let bill of bills){
        
        if( !stock[bill] ){
            stock[bill] = 0;
        }
        ++stock[bill];

        if(10 == bill){
            
            if(!stock[5]){
                return false;
            }
            --stock[5];
        }else if(20 == bill){

            if(stock[10] && stock[5]){
                --stock[10];
                --stock[5];
            }else if(3 <= stock[5]){
                stock[5] -= 3;
            }else{
                return false;
            }
        }
    }

    return true;
};