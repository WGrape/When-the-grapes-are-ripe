function equar(a, b) {
    // 判断数组的长度
    if (a.length !== b.length) {
        return false
    } else {
        // 循环遍历数组的值进行比较
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false
            }
        }
        return true;
    }
}

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
        return;
    }
    stack.push(p.val);
    traverseLink(p.next);
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    stack = [];
    traverseLink(head);

    let _stack = Object.assign([], stack);
    stack.reverse();

    return equar(stack, _stack);
};