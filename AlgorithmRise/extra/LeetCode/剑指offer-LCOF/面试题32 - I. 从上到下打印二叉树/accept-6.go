/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

 var nodes [][] int

 func max(vals ...int) int {
	 max := 0
	 for _, val := range vals {
		 if val >= max{
			 max = val
		 }
	 }
	 return max
 }
 
 func traverseTree(node *TreeNode, level int) int {
 
	 if nil == node {
		 return level
	 }
 
	 nodes[level] = append(nodes[level], node.Val)
 
	 var level_l, level_r int
	 if nil != node.Left {
		 level_l = traverseTree(node.Left, level+1)
	 }
 
	 if nil != node.Right {
		 level_r = traverseTree(node.Right, level+1)
	 }
 
	 // 返回 Max_level
	 return max(level, level_l, level_r)
 }
 
 func levelOrder(root *TreeNode) []int {
 
	 nodes = make([][]int, 1005)
	 max_level := traverseTree(root, 0)
 
	 t := make([]int, 0)
 
	 for i:= 0; i<= max_level; i++ {
 
		 arr := nodes[i]
		 for _, val := range arr{
			 t = append(t, val)
		 }
	 }
	 
	 nodes = nodes[0:max_level+1]
 
	 return t
 }