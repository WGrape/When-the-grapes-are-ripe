package wronganswer

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

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
		 return 0
	 }
 
	nodes[level] = append(nodes[level], node.Val)
 
	 if nil != node.Left {
		 traverseTree(node.Left, level+1)
	 }
 
	 if nil != node.Right {
		 traverseTree(node.Right, level+1)
	 }
 
	 return 0
 }
 
 func levelOrder(root *TreeNode) []int {
 
	 nodes = make(map[int][]int)
 
	 // 定义一个二维数组
	 traverseTree(root, 0)
 
	 t := make([]int, 0)
 
	 for _, arr := range nodes{
 
		 for _, val := range arr{
			 t = append(t, val)
		 }
	 }
 
	 fmt.Println(nodes)
 
	 return t
 }