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

var traverseTree = function(p, sequence){

    if(!p.left && !p.right){
        sequence.push(p.val);
        return sequence;
    }

    if(p.left){
        sequence = traverseTree(p.left, sequence);
    }

    if(p.right){
        sequence = traverseTree(p.right, sequence);
    }

    return sequence;
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {

    sequence1 = traverseTree(root1, []);
    sequence2 = traverseTree(root2, []);

    return equar(sequence1, sequence2);
};