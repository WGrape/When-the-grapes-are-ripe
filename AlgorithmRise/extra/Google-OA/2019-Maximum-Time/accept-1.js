/**
 * @param {number[]} time
 * @return {number}
 */
var getMaxTime = function(time) {
    
    let time_th = time.split('');
    for(let i=time.length; i>=0; --i){

        if(':' === time[i]){
        
           continue;
        }else if('?' === time[i]){
           
            if(4 === i){
                time_th[4] = '9';
            }else if(3 === i){
                time_th[3] = '5';     
            }else if(1 === i){
                
                if('0' == time[0] || '1' == time[0]){
                   time_th[1] = '9';
                }else{
                   time_th[1] = '3'; 
                }
                
            }else if(0 === i){
                
               if(3 < time[1]){
                   time_th[0] = '1';
               }else{
                   time_th[0] = '2';
               }
            }
        }
    }
    
    return time_th.join('');
};


getMaxTime("23:5?"); // 23:59
getMaxTime("2?:22"); // 23:22
getMaxTime("0?:??"); // 09:59
getMaxTime("1?:??"); // 19:59
getMaxTime("?4:??"); // 14:59
getMaxTime("?3:??"); // 23:59
getMaxTime("??:??"); // 23:59
getMaxTime("?4:5?"); // 14:59
getMaxTime("?4:??"); // 14:59
getMaxTime("?3:??"); // 23:59
getMaxTime("23:5?"); // 23:59
getMaxTime("2?:22"); // 23:22
getMaxTime("0?:??"); // 09:59
getMaxTime("1?:??"); // 19:59
getMaxTime("?4:0?"); // 14:09
getMaxTime("?9:4?"); // 19:49



