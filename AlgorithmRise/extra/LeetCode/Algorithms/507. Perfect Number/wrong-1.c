class Solution {
    public boolean checkPerfectNumber(int num) {
        
        if(num<=1){
            
            return false;
        }
        
        // 奇数一定不是
        if(num%2!=0){
            
            return false;
        }
        
        int i , sum=0;
        for(i=1; sum<num && i<=num/2 ; i+=2){
            
            if(num%i==0){
                
                sum=sum+i+(num/i);
            }
        }
        
        if(sum != num){
            
            return false;
        }
        
        return true;
    }
}