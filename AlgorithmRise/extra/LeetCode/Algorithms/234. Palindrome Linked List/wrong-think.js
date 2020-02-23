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
    
    let stack = [], p = head, pre_val = false, pre_pre_val = false, reback = false, res = false;
    
    if(!head || !head.next){
        return true;
    }
    while(p){

        if(false == reback){
            
            if(pre_pre_val === p.val){

                reback = true;
                stack.pop();
                stack.pop();
                p = p.next;
                res = true;
                continue;
            }else{
                // nothing
            }
            
            if(pre_val !== p.val){

                stack.push( p.val );
                pre_pre_val = pre_val;
                pre_val = p.val;
                p = p.next;
                continue;
            }else{

                reback = true;
                stack.pop();
                p = p.next;
                res = true;
                continue;
            }
        }else{

            if( stack[stack.length-1] == p.val){
                stack.pop();
                p = p.next;
                res = true;
            }else{
                return false;
            }
        }
    }

    if(stack.length){
        return false;
    }

    return res;
};
// 思路错误
// 一直在以 前后节点值是否相同来判断是否开始逆方向, 这种思路是错误的,
// 因为节点的值都是随意的, 可重复的, 所以无法根据前后值异同来判断是否可以开始逆方向的判断

