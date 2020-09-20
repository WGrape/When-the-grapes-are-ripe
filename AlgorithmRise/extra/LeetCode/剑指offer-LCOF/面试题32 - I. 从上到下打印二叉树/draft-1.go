package main2

import "fmt"

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

 type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

 var nodes map[int][]int

 func traverseTree(node *TreeNode, level int) int {
 
	 if nil == node {
		 return 0
	 }
 
	 if _, ok := nodes[level]; ok{
		 nodes[level] = append(nodes[level], node.Val)
	 } else {
		 nodes = make(map[int][]int, 1005)
	 }
 
	 if nil != node.Left {
		 traverseTree(node.Left, level+1)
	 }
 
	 if nil != node.Right {
		 traverseTree(node.Right, level+1)
	 }
 
	 return 0
 }
 
 func levelOrder(root *TreeNode) []int {
 
	 // 定义一个二维数组
	 traverseTree(root, 0)
 
	 fmt.Println(nodes)
 
	 var t = []int{2, 3}
 
	 return t
 }