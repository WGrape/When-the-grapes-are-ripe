class Solution {
    public int mySqrt(int x) {
        
        switch(x){
                
            case 0: return 0;
            case 1:
            case 2: 
            case 3: return 1;
            default:
                
                int left=2, right=x, mid = (left+right)/2;
                while(left <= right){
                    
                    mid = (left+right)/2;
                    int num = mid*mid;
                    if(num == x){
                        
                        return mid;
                    }else if(num < x){
                        
                        right = mid-1;
                    }else{
                        
                        left = mid+1;
                    }
                }
                
                if(mid>46340){
                    
                    return mid;
                }
                
                return mid;
        }
    }
}