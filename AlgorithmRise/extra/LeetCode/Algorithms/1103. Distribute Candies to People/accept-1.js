/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {

    let people = [], index = 0, seed = 1, sum = 0;
    while(sum<candies){

        let key = index % num_people;
        if( sum + seed <= candies){

            people[key] = people[key] ? people[key] + seed : seed;
        }else if( sum + seed > candies ){

            people[key] = people[key] ? people[key] + (candies-sum) : (candies-sum);
            break;
        }else{

            break;
        }

        sum+=seed;
        ++seed;
        ++index;
    }

    if( num_people != people.length ){
        people = people.concat( Array(num_people - people.length).fill(0) );
    }

    return people;
};