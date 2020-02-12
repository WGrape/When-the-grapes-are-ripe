/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var tree = [];

var visitTree = function(node, index){

    if(!node){
       return;
    }
    
    let child_left = index*2+1, child_right = index*2+2;
    if(node.left){
        
        tree[ child_left ] = node.left.val;
    }
    
    if(node.right){
        
        tree[ child_right ] = node.right.val;
    }
    
    visitTree(node.left, child_left);
    visitTree(node.right, child_right);
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    
    tree = [];
    
    if(!root){
       
        return [];
    }
    
    tree[0] = root.val;
    visitTree(root, 0);
    
    
    // 1, 2, 4, 8, 16, 32
    let count=0, i=1, length = tree.length, stack = [], nodes = [];
    for( ; count<length; ){
        
        // 超时原因是因为我以为 root 参数就是节点的层级数组，就想使用这个规律来直接切割数组
        // 但是后来才发现 root 是节点对象，不是一个数组，还是需要用遍历
        nodes = tree.slice(i-1, 2*i-2+1);
        stack.push(nodes.filter((e)=>e !== undefined));
        count += i;
        
        i *= 2;
    }
    
    return stack.reverse();
};