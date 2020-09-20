package  xx

import (
	"fmt" 
	"sort"
)

func getLeastNumbers(arr []int, k int) []int {

    start := len(arr)-k

	arr2 := sort.IntSlice(arr)
    sort.Sort(sort.Reverse(arr2))
    
    fmt.Println(arr2)
    return arr2[start:]
}