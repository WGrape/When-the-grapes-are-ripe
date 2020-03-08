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

    public TreeNode traverseTree(TreeNode p){
        
        if(null == p){
            return null;
        }

        TreeNode node_left = traverseTree(p.left);
        TreeNode node_right = traverseTree(p.right);

        if(null == node_left && null == node_right){
            return p;
        }else if( null != node_left  && null == node_right ){
            node_left.right = p;
        }else if( null == node_left  && null != node_right ){
            return node_right;
        }else{

            return p;
        }

        return p;
    }

    public TreeNode increasingBST(TreeNode root) {
        return traverseTree(root);
    }
}