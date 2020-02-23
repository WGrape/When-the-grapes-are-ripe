/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    let stack = [], length = 0;
    let p = head;
    let res = true;
    while(p){
        stack.push(p.val);
        p = p.next;
        ++length;
    }

    p = head;
    while(p){

        if( length-1 < 0 || stack[ length-1 ] !== p.val){
            res = false;
            break;
        }
        p = p.next;
        --length;
    }

    return res;
};