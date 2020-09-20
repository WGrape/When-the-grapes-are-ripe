/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let result = [];
let stack = [];
var traverseTree = function(p){
    if(!p){
        return;
    }

    stack.push(p.val);
    if(!p.left && !p.right){

        // 叶子节点
        result.push(Object.assign([], stack));
        return;
    }

    if(p.left){
        traverseTree(p.left);
        stack.pop();
    }

    if(p.right){
        traverseTree(p.right);
        stack.pop();
    }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {

    result = [];
    stack = [];

    if(!root){
        return 0;
    }

    // 前序遍历+栈结构
    traverseTree(root);

    let sum = 0;
    for(let item of result){
        item = item.join("");
        sum += parseInt(item);
    }

    return sum;
};