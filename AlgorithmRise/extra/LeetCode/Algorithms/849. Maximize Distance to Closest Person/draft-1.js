/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {

    let length = seats.length, people = [];
    for(let i = 0; i<=length-1; ++i){

        if(seats[i]){
            people.push(i);
        }
    }

    let max = -1;
    for(let i = 1; i<=people.length-1; ++i){
        let distance = (people[i] - people[i-1]) >> 1;
        max = Math.max(max, distance);
    }

    return max;
};