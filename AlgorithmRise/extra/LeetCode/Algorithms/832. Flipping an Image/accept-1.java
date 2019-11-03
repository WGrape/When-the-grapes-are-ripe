class Solution {
    public int[][] flipAndInvertImage(int[][] A) {
     
        int i=0, j=0, height=A.length, width=A[0].length;
        
        int[][] B = new int[height][width];
        
        for(i=0;i<=height-1;++i){
            
            for(j=width-1; j>=0; --j){
                
                B[i][width-1-j] = (A[i][j]==0)?1:0;
            }
        }
        
        return B;
    }
}