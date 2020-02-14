// leetcode在线测试是通过了的，但是提交时却判错！

static char map[9999][9999];
static char output[9999];

char* convert(char* s, int numRows) {
 
    int i=0,j=0,pos=0;
    
    while( '\0' != *(s+pos) ){
        
        // 一直往下走,直到尽头
        for(i=0;i<=numRows-1 && '\0' != *(s+pos);++i){
            
            map[i][j] = *(s + pos);
            ++pos;
        }
        
        // 一直往上走,直到尽头
        for(i=numRows-1;i>1 && '\0' != *(s+pos);--i){
            
            map[i-1][++j] = *(s + pos); 
            ++pos;
        }
        if(i<=1){
            
            ++j;
        }
        
    }
    
    int k=0;
    for(i=0;i<=numRows-1;++i){
        
        for(j=0;j<=9998&&k<=9998;j++){
        
            if(map[i][j]!='\0'){
            
                output[k] = map[i][j];
                ++k;
            }
        }
    }
    
    return output;
}