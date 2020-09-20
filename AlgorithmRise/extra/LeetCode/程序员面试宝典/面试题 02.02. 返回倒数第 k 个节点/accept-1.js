/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

let stack = [];

var traverseLink = function(p){

    if(!p){
        stack[0] = 0;
        return 0;
    }


    let index = 1 + traverseLink(p.next);
    stack[index] = p.val;
    return index;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {

    stack = [];
    traverseLink(head);

    if(stack.length < k){
        return false;
    }

    return stack[ k ];
};