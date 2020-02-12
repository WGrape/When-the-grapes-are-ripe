/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class Solution extends GuessGame {
    public int guessNumber(int n) {
        
        int _guess = n;
        while(true){

            int res = guess(_guess);
            if( 0 == res ){
                return _guess;
            }
            if( 1 == res){
                ++_guess;
                continue;
            }
            if( -1 == res ){
                --_guess;
                continue;
            }
        }
    }
}