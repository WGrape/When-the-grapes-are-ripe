class Solution {
    public boolean rotateString(String A, String B) {
        
        
        int len=A.length();
        if(len<1){
            
            return true;
        }
        if(len==1){
            
            return A.equals(B);
        }
        
        int i=0;
        while(i<=len-1){
            
            if(A.charAt(i)==B.charAt(0)){
                break;
            }else{
                
                ++i;
            }
        }
        if(i>len-1){
            return false;
        }
        
        int settleDown=i, j, lenB=B.length();

        // 从 A 串的 settleDown+1 向右查
        for(i=settleDown+1,j=1; i<=len-1&&j<=lenB-1; ++i,++j){
            
            if(A.charAt(i)!=B.charAt(j)){
                return false;
            }
        }
        
        
        // 从 A 串的 0 - settleDown-1 开始查
        for(i=0; i<=settleDown-1 && j<=lenB-1; ++i,++j){
            
            if(A.charAt(i)!=B.charAt(j)){
                return false;
            }
        }
        
        return true;
    }
}