class Solution {
    public int numJewelsInStones(String J, String S) {
        
        int len_j = J.length();
        int len_s = S.length();
        
        int i,count=0;
        
        for(i=0; i<=len_s-1; ++i){
            
            if(-1 < J.indexOf( S.charAt(i) )){
                
                count++;
            }
        }
        
        return count;
    }
}