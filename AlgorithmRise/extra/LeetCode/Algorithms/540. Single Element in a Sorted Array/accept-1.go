package  SingleElementinaSortedArray

func singleNonDuplicate(nums []int) int {

    var n int = 0
    for _, num := range nums{
        n ^= num
    }

    return n
}