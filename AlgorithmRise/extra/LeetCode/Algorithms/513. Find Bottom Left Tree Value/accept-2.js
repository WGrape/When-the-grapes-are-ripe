/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let hash = {}, max_level = 0;

var traverseTree = function(p, level){

    if(!p){
        return;
    }

    max_level = Math.max(max_level, level);
    if(!hash[level]){
        hash[level] = [p.val];
    }

    if(p.left){
        traverseTree(p.left, level+1);
    }
    
    if(p.right){
        traverseTree(p.right, level+1);
    }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {

    hash = {};
    max_level = 0;

    traverseTree(root, 1);

    return hash[max_level][0];
};