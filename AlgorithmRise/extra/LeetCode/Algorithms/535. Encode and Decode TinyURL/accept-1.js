let count = 1;
let map = {};

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {

    map[ count ] = longUrl;
    return "http://tinyurl.com/"+(count++); // 这里有个经典的运算需求: 返回的同时要求自增, 这时可以使用 i++ 运算符
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    shortUrl = shortUrl.replace("http://tinyurl.com/", "");
    return map[shortUrl];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */