class Solution {
    public String reverseString(String s) {
        
        int len = s.length();
        
        if(len<1){
            
            return "";
        }
        
        if(len<2){
            
            return s;
        }
        
        return new StringBuffer(s).reverse().toString();
        
    }
}