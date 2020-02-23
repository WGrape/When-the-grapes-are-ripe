/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    
    let p = head;
    if(val == p.val){
        head = p.next;
    }else{
        while(p){

            if( p.next && val == p.next.val ){
                p.next = p.next.next;
                break;
            }
            p = p.next;
        }
    }

    return head;
};