let key = 29;

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {

    let stack = [];
    for(let c of longUrl){
        console.log(c);
        stack.push( c^key );
    }
    console.log(stack);
    return stack.join("");
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    
    let stack = [];
    for(let c of shortUrl){
        console.log(c);
        stack.push( String.fromCharCode(c^key) );
    }
    return stack.join("");
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */