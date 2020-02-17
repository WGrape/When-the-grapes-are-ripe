/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var swap = function(node_left, node_right){
    let temp;

        temp = node_right.val;
        node_right.val = nodes[0].left.val;
        nodes[0].left.val = temp;
}

var visitTree = function(nodes){

    let length = nodes.length;

    if(0 === length){
        return;
    }

    let temp;
    if(1 === length){
        swap(nodes[0], nodes[1]);
        visitTree([nodes[0].left, nodes[0].right]);
        return;
    }

    let end = length/2;
    for( let i = 0; i<end; ++i ){
        
    }

    visitTree(nodes);
}


/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    visitTree(root);

    return root;
};