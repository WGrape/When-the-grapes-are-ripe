/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {

    let length = groupSizes.length;
    let users = Array.from(Array(length).keys()), user = 0;
    let result = [], stack = [];
    for( let size of groupSizes ){

        if( !stack.length ){
            stack.push( [] );
            stack[ stack.length-1 ].size = size;
        }

        // 找到指定的layer
        let find_layer = false;
        for( let i = stack.length-1; i>=0; --i ){
            if( size == stack[i].size ){
                if( stack[i].length < size ){
                    find_layer = true;
                    stack[i].push(user);
                    break;
                }
            }
        }

        if(!find_layer){
            stack.push( [ user ] );
            stack[ stack.length-1 ].size = size;
        }
        ++user;
    }
    
    return stack;
};