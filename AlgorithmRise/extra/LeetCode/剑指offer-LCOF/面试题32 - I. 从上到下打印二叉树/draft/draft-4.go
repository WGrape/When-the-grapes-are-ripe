package dragt

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

 var max_level int

 func traverseTree(nodes map[int][]int, node *TreeNode, level int) map[int][]int {
 
	 if nil == node {
		 return nodes
	 }
 
	nodes[level] = append(nodes[level], node.Val)
 
	if level >= max_level{
		max_level = level
	}
 
	 if nil != node.Left {
		 traverseTree(nodes, node.Left, level+1)
	 }
 
	 if nil != node.Right {
		 traverseTree(nodes, node.Right, level+1)
	 }
 
	 return nodes
 }
 
 func levelOrder(root *TreeNode) []int {
 
	 max_level = 0
 
	 var nodes map[int][]int
 
	 var t []int
	 var i int = 0
	 for i <= 1{
 
		 // 定义一个二维数组
		 nodes = make(map[int][]int)
		 nodes = traverseTree(nodes, root, 0)
 
		 t = make([]int, 0)
 
		 for _, arr := range nodes{
 
			 for _, val := range arr{
				 t = append(t, val)
			 }
		 }
		 i++
	 }
 
	 return t
 }