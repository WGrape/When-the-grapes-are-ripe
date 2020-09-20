package  RepeatedSubstringPattern

func computeAsciiSUm(s string) int {

    var ascii = 0

    return ascii
}

func repeatedSubstringPattern(s string) bool {

    // 先判断长度的奇偶性
    len := len(s)

    if 0 == len{
        return true
    }

    // 如果是奇数
    if 0 != len%2 {
        if ascii := computeAsciiSUm(s); int(s[0])*len != ascii {
            return false
        }
        return true
    }

    // 如果是偶数
    return false
}