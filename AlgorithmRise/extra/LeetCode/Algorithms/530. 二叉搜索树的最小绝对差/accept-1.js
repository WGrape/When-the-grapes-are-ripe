/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let queue = [];
let min = Number.MAX_VALUE;
var traverseTree = function(p){
    if(!p){
        return;
    }

    if(p.left){
        traverseTree(p.left);
    }

    queue.push(p.val);

    if(queue.length > 1){
        min = Math.min(min, queue[ queue.length-1 ] - queue[ queue.length-2 ]);
    }

    if(p.right){
        traverseTree(p.right);
    }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {

    queue = [];
    if(!root){
        return 0;
    }

    // 中序遍历即可
    min = Number.MAX_VALUE;
    traverseTree(root);

    return min;
};