/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {

    let stack = [root], result = [];

    while(stack.length){
                
        let length = stack.length;
        if(stack[length-1].left){
            stack.push(stack[length-1].left);
        }

        result.push(stack[length-1].val);

        if(stack[length-1].right){
            stack.push(stack[length-1].right);
        }

        stack.pop();
        console.log(stack.length);
    }

    return result;
};