/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {

    groupSizes.sort((a, b) => a-b);

    let length = groupSizes.length;
    let users = Array.from(Array(length).keys());
    let result = [];
    for( let i = 0; i<=length-1;){

        let size = groupSizes[i];
        let res = users.slice(i, i+size);
        result.push( res );
        i+=size;
    }

    return result;
};