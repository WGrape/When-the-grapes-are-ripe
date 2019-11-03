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
    public TreeNode searchBST(TreeNode root, int val) {
        
        if(root==null){
            
            return null;
        }
        
        
        TreeNode p = root;
        while(p!=null){
            
            if(val > p.val){
                
                p=p.right;
            }else if( val < p.val ){
                
                p=p.left;
            }else{
                
                return p;
            }
        }
        
        return null;
    }
    
    
    
}