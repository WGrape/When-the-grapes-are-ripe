package canPlaceFlowers

func canPlaceFlowers2(flowerbed []int, n int) bool {

    count := 0
    len := len(flowerbed);
    for index, value := range flowerbed{

        if 0 == value && (0 == index || 1 != flowerbed[index-1]) && ( len-1 == index || (index+1 <= len-1 && 1 != flowerbed[index+1])){
            flowerbed[index] = 1
            count++
        }
    }

    return count >= n
}