class Solution {
    public int add(int a, int b) {
        
        while(0 != b){
            
            int plus = a^b; // 计算位数之和
            b = ((a & b) << 1); // 计算进位
            a = plus;
        }

        return a;
    }
}