#include<string.h>

static char s[999];

char* longestCommonPrefix(char** strs, int strsSize) {
    
    int i=0,j=0,end=0;
    
    memset(s,'\0',sizeof(char)*999);
    
    if(strsSize==0){
        
        return "";
    }
    
    if(strsSize==1){
        
        return strs[0];
    }
    
    while(1){
        
        for(i=0;i<=strsSize-2;++i){

            if(j>strlen(strs[i])-1 || j>strlen(strs[i+1])-1 || strs[i][j] != strs[i+1][j]){
                
                end=1;break;
            }
            
        }   
        
        if(end){
            
            break;
        }else{
            
            ++j;
        }
    }
    
    return strncpy(s,strs[0],j);
}