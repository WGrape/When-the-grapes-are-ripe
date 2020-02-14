/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    
    let stack = [];

    while(ops.length){

        let op = ops.shift();
        if( "C" === op ){

            stack.pop();
        }else if( "D" === op ){

            let length = stack.length;
            stack.push( stack[length-1]*2 );
        }else if( "+" === op ){
            
            let length = stack.length;
            stack.push( stack[length-1] + stack[length-2] );
        }else{
            stack.push( parseInt(op) );
        }
    }

    // 计算 stack 数组的和
    let sumEqual = stack.reduce((prev,current,index,arr)=>{
        return prev+current
    });

    return sumEqual;
};