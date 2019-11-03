class Solution {
    
    private int[] map = new int[46];
    
    public int climbStairs(int n) {
        
        this.printTable();
        return this.map[n];
    }
    
    // 打表
    public void printTable(){
        
        this.map[0]=1;
        this.map[1]=1;
        this.map[2]=2;
        
        int i;
        for(i=3;i<=45;++i){
            
            this.map[i] = this.map[i-1] + this.map[i-2];
        }
    
    }
    
}