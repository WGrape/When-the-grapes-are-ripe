class Solution {

    public int findComplement(int num) {

        int n = 1, _num = num;
        while( 0 < (_num = _num/2) ){

            n = n*2+1;
        }

        return num ^ n;
    }
}