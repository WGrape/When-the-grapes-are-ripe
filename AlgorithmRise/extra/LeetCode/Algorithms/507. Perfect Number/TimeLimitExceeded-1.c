class Solution {
    public boolean checkPerfectNumber(int num) {
        
        if(num<=1){
            
            return false;
        }
        
        int i , sum=0;
        for(i=1; sum<num && i<=num/2 ; ++i){
            
            if(i!=num && num%i==0){
                
                sum+=i;
            }
        }
        
        if(sum != num){
            
            return false;
        }
        
        return true;
    }
}