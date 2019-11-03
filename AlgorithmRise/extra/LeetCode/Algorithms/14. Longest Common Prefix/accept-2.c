#include<string.h>

static char s[999];
static char s1[999];

char* sub_match(char *_s1, char *_s2){
    
    int j=0,len1=strlen(_s1),len2=strlen(_s2);
    for(;j<=len1-1&&j<=len2-1&&_s1[j]==_s2[j];++j){
        
        // printf("%s + %s + %d \n",_s1,_s2,j);
    }
    
    memset(s,'\0',sizeof(char)*999); // 必须 ！！！
    return strncpy(s,_s1,j);
}



char* longestCommonPrefix(char** strs, int strsSize) {
    
    if(strsSize==0){
        
        return "";
    }
    
    if(strsSize==1){
        
        return strs[0];
    }
    
    int i=0;
    for(i=0,strcpy(s1,strs[0]);i<=strsSize-2;++i){

        strcpy(s1,sub_match(s1,strs[i+1]));
    }
    
    return s1;
}