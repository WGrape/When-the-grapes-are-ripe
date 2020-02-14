class Solution {
    
    public boolean judgeCircle(String moves) {
        
        char ch;
        int leftCount=0,rightCount=0,upCount=0,downCount=0;
        int i=0,len=moves.length();
        
        if(len%2!=0){
            
            return false;
        }
        
        while(i<=len-1){
            
            if( 'L' == moves.charAt(i) ){
                leftCount++;
            }else if( 'R' == moves.charAt(i) ){
                rightCount++;
            }else if( 'U' == moves.charAt(i) ){
                upCount++;
            }else if( 'D' == moves.charAt(i) ){
                downCount++;
            }
            
            ++i;
        }
        
        if( (leftCount!=rightCount) || (upCount!=downCount) ){
            
            return false;
        }
        
        return true;
    }
    

    
}

