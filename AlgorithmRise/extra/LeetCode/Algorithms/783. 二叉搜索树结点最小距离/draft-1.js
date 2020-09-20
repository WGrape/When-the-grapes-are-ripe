/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let min = Number.MAX_VALUE;
var traverseTree = function(pre, p){
    if(!p){
        return;
    }

    if(p.left){
        traverseTree(p, p.left);
    }

    if(p.right){
        traverseTree(p, p.right);
    }

    if(pre){
        min = Math.min(min, Math.abs(pre.val - p.val));
    }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {

    if(!root){
        return 0;
    }

    // 中序遍历即可
    min = Number.MAX_VALUE;
    traverseTree(null, root);

    return min;
};