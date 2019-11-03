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
            
            // 提前判断 : 如果所剩的加上 leftCount  比 rightCount 小，就直接返回 false
            // 提前判断 : 如果所剩的加上 rightCount 比 rightCount 小，就直接返回 false
            // 提前判断 : 如果所剩的加上 upCount    比 downCount  小，就直接返回 false
            // 提前判断 : 如果所剩的加上 downCount  比 upCount    小，就直接返回 false
            if( (leftCount+(len-1-i)) < rightCount || (rightCount+(len-1-i)) < leftCount ){
                return false;
            }
            if( (upCount+(len-1-i)) < downCount || (downCount+(len-1-i)) < upCount ){
                return false;
            }
            
            
            ++i;
        }
        
        if( (leftCount!=rightCount) || (upCount!=downCount) ){
            
            return false;
        }
        
        return true;
    }
    

    
}


