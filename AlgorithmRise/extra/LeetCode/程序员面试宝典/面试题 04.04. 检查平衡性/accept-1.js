/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let flag = true

var traverseTree = function(p){

    if(!p){
        return 0;
    }

    let level_left = 0, level_right = 0;
    if(p.left){
        level_left = 1 + traverseTree(p.left);
    }

    if(p.right){
        level_right = 1 + traverseTree(p.right);
    }

    if(Math.abs(level_right - level_left) > 1){
        flag = false;
    }

    return Math.max(level_left, level_right);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

    flag = true;
    traverseTree(root);
    return flag;
};