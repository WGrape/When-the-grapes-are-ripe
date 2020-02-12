// JavaScript sliding window beats 100%
// https://leetcode.com/problems/max-consecutive-ones-iii/discuss/249023/JavaScript-sliding-window-beats-100
var longestOnes = function(A, K) {
    let longest = 0;
    let zeroCount = 0;
    let start = 0;
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0) zeroCount++;

        if (zeroCount > K) {
            if (A[start] === 0) zeroCount--;
            start++;
        }
        
        longest = Math.max(longest, i - start + 1);
    }
    
    return longest;
};