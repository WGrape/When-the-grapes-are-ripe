package  RepeatedSubstringPattern

import "fmt"

func computeAsciiSUm2(s string) int {

	var ascii int = 0

	for _, c := range s {
		ascii += int(c)
	}

	return ascii
}

func repeatedSubstringPattern2(s string) bool {

	// 先判断长度的奇偶性
	var length = len(s)

	if 0 == length {
		return true
	}

	// 如果是奇数
	if 0 != length%2 {
		if ascii := computeAsciiSUm(s); int(s[0])*length != ascii {
			return false
		}
		return true
	}

	// 如果是偶数
	return false
}

func main(){

	fmt.Println(repeatedSubstringPattern("aaa"))
}
