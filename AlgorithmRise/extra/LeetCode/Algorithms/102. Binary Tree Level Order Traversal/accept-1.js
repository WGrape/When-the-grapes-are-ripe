/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let nodes = [ root ], stack = [];

    if(!root){
        return [];
    }

    while( nodes.length ){

        let layer = [], next_nodes = [];
        for(let node of nodes){
            layer.push( node.val );

            if(node.left){
                next_nodes.push(node.left);
            }
            if(node.right){
                next_nodes.push(node.right);
            }
        }
        nodes = Object.assign([], next_nodes);
        stack.push(layer);
    }

    return stack;
};