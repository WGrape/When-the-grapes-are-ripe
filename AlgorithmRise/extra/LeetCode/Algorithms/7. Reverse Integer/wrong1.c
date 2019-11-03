int reverse(int x) {
    
    int target = x;
    int sum=0;
    while(0!=target){
        
        sum=sum*10+target%10;
        target/=10;
    }

    return sum;
}