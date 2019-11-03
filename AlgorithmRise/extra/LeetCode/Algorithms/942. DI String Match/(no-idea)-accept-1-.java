
// 题目链接： https://leetcode.com/problems/di-string-match/
// 非常好的一题，不是很容易想到的
// 想不出来，看了题解之后才明白
class Solution {
    
    public int[] diStringMatch(String S) {
        
        int len = S.length();
        
        int low = 0, high = len;
        
        int[] permutation = new int[len + 1];
    
        for (int i = 0; i < len; ++i) {
            
            if (S.charAt(i) == 'I'){
                
                permutation[i] = low++;   
            }
            else{
                
                permutation[i] = high--;   
            }
        }
    
        // 这个最容易漏掉
        permutation[len] = low;
        
        return permutation ;
    }
    
}