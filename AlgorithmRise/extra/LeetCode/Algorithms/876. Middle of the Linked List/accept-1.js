/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    
    let stack = [], p = head;
    while(p){
        stack.push( p );
        p = p.next;
    }
    
    let length = stack.length;
    return stack[ length >> 1 ];
};