/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public int sumOfLeftLeaves(TreeNode root) {
        
        
        return traverse(root, false);
    }
    
    
    public int traverse( TreeNode node, boolean isLeftChild ){
        
        if(node==null){
            return 0;
        }
        
        if(node.left!=null && node.right!=null){ // 左右孩子均不为空
         
            return traverse( node.left, true ) + traverse( node.right, false );
        }else if(node.left!=null){ // 右孩子为空，左孩子不为空
            
            return traverse( node.left, true);
        }else if(node.right!=null){ // 左孩子为空, 右孩子不为空
            
             return traverse( node.right, false);
        }else{ // 左右孩子均为空
            
            return isLeftChild?node.val:0;
        }
        
    }
    
}