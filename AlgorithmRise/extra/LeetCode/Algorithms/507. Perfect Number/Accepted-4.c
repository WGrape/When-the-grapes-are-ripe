class Solution {
    public boolean checkPerfectNumber(int num) {
       
        if(num<=1){
            
            return false;
        }
        
        // 奇数一定不是
        if(num%2!=0){
            
            return false;
        }
        
        int i , sum=1;
        double max=Math.sqrt(num);
        for(i=2; sum<num && i<=max ; i=i<<1){
            
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