class Solution {
    public int lengthOfLastWord(String s) {
        
        s = s.trim();
        
        int len=s.length();
        
        if(len<1){
            
            return 0;    
        }
        
        int i =len-1;
        len =0 ;
        
        // 找到最后一个非空的字符
        // while(s.charAt(i)==' '){
            
        //    --i;
        // } 还是直接用 trim 替代吧
        
        while(i>=0&&s.charAt(i)!=' '){
            
            ++len;
            --i;
        }
        
        return len;
    }
}