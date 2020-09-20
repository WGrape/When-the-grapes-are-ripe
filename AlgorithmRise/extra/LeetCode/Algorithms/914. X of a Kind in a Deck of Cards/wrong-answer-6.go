func hasGroupsSizeX(deck []int) bool {

    length := len(deck)

    var min int = length
    hash := make(map[int]int, length)

    // 定义HASH
    for _, value := range deck{

        if _, ok := hash[value]; false == ok{
            hash[value] = 0;
        }
        hash[value]++;
    }

    for _, value := range deck{

        if hash[value] <= min{
            min = hash[value]
        }
    }

    fmt.Println(min, hash)

    for _, value := range hash{

        if 0 != value % min {

            if(0 != min%2 || 0 != value %2){
                return false
            }
        }
    }

    if min < 2{
        return false
    }

    return true
}