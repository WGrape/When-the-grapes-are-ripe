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

    public void buildTree(TreeNode node, int[] nums, int index){

        node.val = nums[index];
        int length = nums.length;

        // 数组中最后一个
        if(length-1 == index){
            return;
        }

        if(length-2 == index){
            node.left = new TreeNode(0);
            buildTree(node.left, nums, index+1);
        }else{
            node.left = new TreeNode( nums[index+1] );
            node.right = new TreeNode( nums[index+2] );
            buildTree(node.left, nums, index+1);
            buildTree(node.right, nums, index+2);
        }
    }

    public TreeNode sortedArrayToBST(int[] nums) {

        if(nums.length < 1){
            return null;
        }
        TreeNode node = new TreeNode(0);
        buildTree( node, nums, 0);

        return node;
    }
}