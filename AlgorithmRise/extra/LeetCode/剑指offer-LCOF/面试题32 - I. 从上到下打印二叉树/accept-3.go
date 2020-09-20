/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

 var nodes map[int][]int

 func traverseTree(node *TreeNode, level int) int {
 
	 if nil == node {
		 return level
	 }
 
	 nodes[level] = append(nodes[level], node.Val)
 
	 var max_level , level_l, level_r int
	 if level >= max_level{
		max_level = level
	 }
 
	 if nil != node.Left {
		 level_l = traverseTree(node.Left, level+1)
	 }
 
	 if nil != node.Right {
		 level_r = traverseTree(node.Right, level+1)
	 }
 
	 // 返回 Max_level
	 if level_l >= max_level{
		 max_level = level_l
	 }
	 if level_r >= max_level{
		 max_level = level_r
	 }
	 return max_level
 }
 
 func levelOrder(root *TreeNode) []int {
 
	 // 定义一个二维数组
	 nodes = make(map[int][]int)
	 max_level := traverseTree(root, 0)
 
	 var t []int
	 t = make([]int, 0)
 
	 var arr []int
 
	 var i int = 0
	 for i<= max_level {
 
		 arr = nodes[i]
		 for _, val := range arr{
			 t = append(t, val)
		 }
		 i++
	 }
 
	 return t
 }