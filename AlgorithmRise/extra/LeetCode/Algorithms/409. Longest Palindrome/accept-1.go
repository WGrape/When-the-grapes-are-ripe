package  LongestPalindrome

func longestPalindrome(s string) int {

    var count = 0
    var len = len(s)
    var hash map[string]int /*创建集合 */
    hash = make(map[string]int)

    // 计算出现奇数次的字符
    for index, _ := range s{
        
        c := s[index]
        if _, ok := hash[ string(c) ]; !ok {
            hash[ string(c) ] = 0
        }
        hash[ string(c) ]++
    }

    for _, times := range hash{

        if 0 != times%2 {
            count++
        }
    }
    
    if 0 == count{
        return len
    }
    return len - (count-1)
}