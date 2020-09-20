func numPairsDivisibleBy60(time []int) int {

    len := len(time)
    count := 0
    for i:=0; i <= len-2; i++ {

        for j := i+1; j<=len-1; j++{

            if( 0 == ( time[i] + time[j] ) % 60 ){
                count++
            }
        }
    }

    return count
}