class Solution {
    
    public double binpow(double x, int n){

        if( 0 == n ){
            return 1;
        }

        double res = binpow(x, n/2);
        if( 0 != n%2 ){
            return res * res * x;
        }

        return res * res;
    }
    
    public double myPow(double x, int n) {
        
        if( n >= 0 ){
            return binpow(x, n);   
        }
        
        return 1 / binpow(x, Math.abs(n));
    }
}

// 快速幂(二分) 思想: https://leetcode-cn.com/problems/powx-n/solution/powx-n-by-leetcode/