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
var levelOrderBottom = function(root) {
    
    if(!root){
        return [];
    }
    
    let nodes = [ root ], length = nodes.length, stack = [];
    
    while(length){
        
        let layer = [], next_nodes = [];
        
        // 循环 nodes
        for(let i=0; i<=length-1; ++i){
            
            let node = nodes[i];
            
            if(null !== node.val){
                
                layer.push( node.val );   
            }
            
            if(node.left){
                next_nodes.push(node.left);
            }
            
            if(node.right){
                next_nodes.push(node.right);
            }
        }
        
        nodes = next_nodes;
        length = nodes.length;
        stack.unshift( layer );
    }
    
    return stack;
};