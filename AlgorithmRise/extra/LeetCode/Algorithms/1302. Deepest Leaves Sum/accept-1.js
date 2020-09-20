/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function sumArr(arr){
    return arr.reduce(function(prev,cur){
        return prev + cur;
    },0);
}

var hash = [[]];

var traverseTree = function(p, level){

    if(!p){
        return;
    }

    if(!hash[level]){
        hash[level] = [];
    }

    hash[level].push(p.val);
    
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
var deepestLeavesSum = function(root) {

    hash = [[]];
    if(!root){
        return 0;
    }
    traverseTree(root, 1);

    return sumArr(hash[ hash.length-1 ]);
};