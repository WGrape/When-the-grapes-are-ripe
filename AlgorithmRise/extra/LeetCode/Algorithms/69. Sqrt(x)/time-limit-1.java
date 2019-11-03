class Solution {
    
    public int mySqrt(int x) {
        
        switch(x){
                
            case 0: return 0;
            case 1:
            case 2: 
            case 3: return 1;
            default:
                
                int i=2;
                while( i*i<=x ){
                    
                    if(i*i==x){
                        
                        return i;
                    }
                    
                    ++i;
                }
                 
                if(i>46340){
                    
                    return 46340;
                }
                
                return i-1;
        }
    }
}