/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    
    let map = {};
    for( let cpdomain of cpdomains ){

        let pieces = cpdomain.split(' ');
        let vp = parseInt(pieces[0]), domains = pieces[1].split('.');

        let t = "";
        for( let i = domains.length-1; i >=0; --i ){

            if( !t ){
                t = domains[i] + t;
            }else{
                t = domains[i] + "." + t;
            }

            if( !map[ t ] ){
                map[ t ] = 0;
            }

            map[ t ] += vp;
        }
    }

    let domains = Object.getOwnPropertyNames( map ), stack = [];
    for(let domain of domains){
        stack.push( map[ domain ] + " " + domain );
    }

    return stack;
};