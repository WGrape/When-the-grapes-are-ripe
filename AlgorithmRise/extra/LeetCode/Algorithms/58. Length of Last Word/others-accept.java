// 这个是别人写的 : https://leetcode.com/problems/length-of-last-word/discuss/201646/Java-faster-than-100
class Solution {
    public int lengthOfLastWord(String s) {
        char[] array = s.trim().toCharArray();
        for(int i = array.length-1;i >= 0;i--)
        {
            if(array[i] == ' ')
                return array.length-1 - i;
        }
        if(array.length > 0)
            return array.length;
        return 0;
    }
}