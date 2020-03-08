/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = [];
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    for( let i = 0; i<=this.cache.length-1; ++i ){
        if( key == this.cache[i].key ){

            let target = this.cache[i];
            this.cache.splice(i, 1);
            this.cache.unshift(target);
            return target.value;
        }
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

    let target = {"key":key, "value":value};

    for( let i = 0; i<=this.cache.length-1; ++i ){
        if( key == this.cache[i].key ){

            this.cache.splice(i, 1);
            this.cache.unshift(target);
            return;
        }
    }

    if(this.cache.length < this.capacity){
        this.cache.unshift(target);
        return;
    }
    this.cache.pop();
    this.cache.unshift(target);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */