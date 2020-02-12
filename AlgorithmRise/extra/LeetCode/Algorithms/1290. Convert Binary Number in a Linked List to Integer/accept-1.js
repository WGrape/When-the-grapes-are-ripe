/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var traverseList = function(p){
    
    if(!p.next){
        return [ p.val, 0 ];
    }
    
    let r = traverseList(p.next);
    
    return [ r[0] + p.val*Math.pow(2, r[1]+1), r[1]+1];
}

/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  
    return traverseList(head)[0];
};