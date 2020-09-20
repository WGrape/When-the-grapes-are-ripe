/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
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

let sequence1 = [];
let sequence2 = [];

var traverseTree = function(p){

    if(!p.left && !p.right){
        sequence1.push(p.val);
        return;
    }

    if(p.left){
        traverseTree(p.left);
    }

    if(p.right){
        traverseTree(p.right);
    }
}

var traverseTree2 = function(p){

    if(!p.left && !p.right){
        sequence2.push(p.val);
        return;
    }

    if(p.left){
        traverseTree2(p.left);
    }

    if(p.right){
        traverseTree2(p.right);
    }
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {

    sequence1 = [];
    sequence2 = [];
    traverseTree(root1);
    traverseTree2(root2);

    return equar(sequence1, sequence2);
};