// 经过测试发现 n=30 时, 序列的长度为 4462 
// 因此，循环长度减小即可优化速度了
static char map[31][4470]={"0","1","11","21","1211"};

int calculate_count(char *s, int start, char target){
    
    int count=0;
    
    while( *(s+start)!='\0' ){
        
        if(target == *(s+start)){
            
            ++count;
            start++;
        }else{
            
            break;
        }
    }
    
    return count;
}

void auto_generate(){
    
    for(int i=5;i<=30;++i){
        
        int k=0, count=0;
        for(int j=0;map[i-1][j]!='\0'&&k<=4468; j+=count,k+=1){
            
            count = calculate_count(map[i-1], j , map[i-1][j]);
            map[i][k]=48+count;

            map[i][++k] = map[i-1][j];
        }
    }
    
    for(int i=1;i<=30;++i){
        
        printf("%s\n",map[i]);
    }
    
}

char* countAndSay(int n) {
    
    auto_generate();
    
    return map[n];
}