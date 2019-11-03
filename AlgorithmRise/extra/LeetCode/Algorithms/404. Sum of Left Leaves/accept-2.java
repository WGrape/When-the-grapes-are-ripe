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
    
    private int sum=0;
    
    public int sumOfLeftLeaves(TreeNode root) {
        
        
        traverse(root, false);
        return sum;
    }
    
    // 第一次提交时 递归用的是 return 的方式， 这次没有用 return ，直接又冲到 100% 了
    // 我去，递归用不用 return 时的差别这么大嘛
    public void traverse( TreeNode node, boolean isLeftChild ){
        
        if(node==null){
         
            sum += 0;
        }else if(node.left!=null && node.right!=null){ // 左右孩子均不为空
         
            traverse( node.left, true );
            traverse( node.right, false );
        }else if(node.left!=null){ // 右孩子为空，左孩子不为空
            
            traverse( node.left, true);
        }else if(node.right!=null){ // 左孩子为空, 右孩子不为空
            
            traverse( node.right, false);
        }else{ // 左右孩子均为空
            
            sum = sum + (isLeftChild?node.val:0);
        }
        
    }
    
}