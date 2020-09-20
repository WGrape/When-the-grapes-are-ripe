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

 func traverseTree(nodes map[int][]int, node *TreeNode, level int) map[int][]int {

	if nil == node {
		return nodes
	}

   nodes[level] = append(nodes[level], node.Val)

	if nil != node.Left {
		traverseTree(nodes, node.Left, level+1)
	}

	if nil != node.Right {
		traverseTree(nodes, node.Right, level+1)
	}

	return nodes
}

func levelOrder(root *TreeNode) []int {

    var nodes map[int][]int
    nodes = nil
    nodes = make(map[int][]int)

	// 定义一个二维数组
	nodes = traverseTree(nodes, root, 0)

    t := make([]int, 0)

    for _, arr := range nodes{

        for _, val := range arr{
            t = append(t, val)
        }
    }

	return t
}