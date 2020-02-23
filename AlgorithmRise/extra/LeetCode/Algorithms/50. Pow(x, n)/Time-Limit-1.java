class Solution {
    public double myPow(double x, int n) {
        
        if( 0 == x ){
            return 0;
        }

        if( 0 == n || 1 == x ){
            return 1;
        }

        int _n = Math.abs(n);
        double result = 1;
        for( int i = 1; i<=_n; ++i ){
            result *= x;
        }

        if( n < 0 ){
            return 1/result;
        }

        return result;
    }
}