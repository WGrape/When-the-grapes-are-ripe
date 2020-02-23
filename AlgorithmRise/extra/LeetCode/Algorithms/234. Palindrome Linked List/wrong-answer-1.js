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
    
    let stack = [], p = head, pre_val = false, reback = false, res = false;
    
    if(!head || !head.next){
        return true;
    }
    while(p){

        if( false == reback && (false == pre_val || pre_val != p.val) ){
            stack.push( p.val );
            pre_val = p.val;
            p = p.next;
            continue;
        }

        if( false == reback && pre_val == p.val ){
            reback = true;
            stack.pop();
            p = p.next;
            continue;
        }

        if( stack[stack.length-1] == p.val){
            stack.pop();
            p = p.next;
            res = true;
        }else{
            return false;
        }
    }

    return res;
};