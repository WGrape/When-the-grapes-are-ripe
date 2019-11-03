#define MAX_INT ((int)(~0U>>1))
#define MIN_INT (-MAX_INT - 1)


int reverse(int x) {
    
    int sum=0;
    
    while(0!=x){

        int mod_num=x%10;
        x/=10;
        
        if(sum>MAX_INT/10 || (sum==MAX_INT/10&&mod_num>7)){
            return 0;
        }
        if(sum<MIN_INT/10 || (sum==MIN_INT/10&&mod_num<-8)){
            return 0;
        }
        
        sum=sum*10+mod_num;
    }   

    return sum;
}