package  SymmetricTree

var nodes [][] int

func reverse(a []int) []int{
    b := make([]int, len(a))
    for i := len(a)/2-1; i >= 0; i-- {
	    opp := len(a)-1-i
	    b[i], b[opp] = a[opp], a[i]
    }
    fmt.Println(a)
    fmt.Println(b)
    return b
}

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

func sliceEqual(a, b []int) bool {
    if len(a) != len(b) {
        return false
    }

    if (a == nil) != (b == nil) {
        return false
    }

    for i, v := range a {
        if v != b[i] {
            return false
        }
    }

    return true
}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSymmetric(root *TreeNode) bool {

    nodes = make([][]int, 1005)
    max_level := traverseTree(root, 0)

    for i:= 0; i<= max_level; i++ {

        arr := nodes[i]
        _arr := reverse(arr)
        if false == sliceEqual(arr, _arr) {
            return false;
        }
    }
    return true
}