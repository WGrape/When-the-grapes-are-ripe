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
    public int maxDepth(TreeNode root) {
        
        if(root==null){
            
            return 0;
        }
        
        return reverse(root);
    }
    
    
    public int reverse(TreeNode node){
        
        if(node.left==null&&node.right==null){ // 左右孩子都没有
            
            return 1;
        }if(node.left==null){ // 只有右孩子
            
            return 1 + reverse(node.right);
        }else if(node.right==null){ // 只有左孩子
            
            return 1 + reverse(node.left);
        }else{ // 左右孩子都有
            
            int leftChildrenCount = reverse(node.left);
            int rightChildrenCount = reverse(node.right);
            int max = (leftChildrenCount>=rightChildrenCount)?leftChildrenCount:rightChildrenCount;
            
            return max+1;
        }
        

    }
}