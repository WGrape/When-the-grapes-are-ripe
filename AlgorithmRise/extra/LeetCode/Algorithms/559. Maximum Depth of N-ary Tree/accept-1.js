/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

let max_level = 0;

let traverseTree = function(p, level){

    if(!p){
        return;
    }

    max_level = Math.max(max_level, level);

    for(let child of p.children){
        traverseTree(child, level+1);
    }
}

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    max_level = 0;
    traverseTree(root, 1);

    return max_level;
};