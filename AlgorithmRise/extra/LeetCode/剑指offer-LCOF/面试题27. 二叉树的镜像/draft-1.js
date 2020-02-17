/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    
    let result = [], nodes = [root];
    while( nodes.length ){
        
        let stack = [];
        let next_nodes = [];
        for( let i = nodes.length-1; i>=0; --i ){
            stack.unshift( nodes[i].val );
            if( nodes[i].right ){
                next_nodes.unshift(nodes[i].right);
            }
            if( nodes[i].left ){
                next_nodes.unshift(nodes[i].left);
            }
        }
        nodes = Object.assign([], next_nodes);
        result.concat( stack );
    }

    return result;
};