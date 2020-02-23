public class Solution {
    // you need treat n as an unsigned value
    public int reverseBits(int n) {
        
        int bit = 31, ans = 0;
        while(0 != n){

            // 获取n当前的最后一位
            int x = n & 1;

            // 将最后一位左移 bit 位, 然后与 ans 相加
            ans += (x << bit );

            // n 向右移动1位, size移动位数减少1位
            n = n >>> 1;
            --bit;
        }

        return ans;
    }
}
