/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let max = 0;

function traverse(node){

    if( !node ){
        return 0;
    }

    let left_depth = traverse(node.left);
    let right_depth = traverse(node.right);

    max = Math.max( max, left_depth+1,);
    max = Math.max( max, right_depth+1,);

    return Math.max(left_depth+1, right_depth+1);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    max = 0;
    traverse(root);
    return max;
};