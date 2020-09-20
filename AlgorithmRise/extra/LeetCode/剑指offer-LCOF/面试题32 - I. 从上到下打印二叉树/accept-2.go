/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

 var max_level int
 var nodes map[int][]int
 
 func traverseTree(node *TreeNode, level int) {
 
	 if nil == node {
		 return
	 }
 
	nodes[level] = append(nodes[level], node.Val)
 
	if level >= max_level{
		max_level = level
	}
 
	 if nil != node.Left {
		 traverseTree(node.Left, level+1)
	 }
 
	 if nil != node.Right {
		 traverseTree(node.Right, level+1)
	 }
 
	 return
 }
 
 func levelOrder(root *TreeNode) []int {
 
	 max_level = 0
	 
	 // 定义一个二维数组
	 nodes = make(map[int][]int)
	 traverseTree(root, 0)
 
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