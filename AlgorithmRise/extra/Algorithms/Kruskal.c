#include<iostream>  
#define N 7  
using namespace std;  
typedef struct _node{  
    intval;  
    intstart;  
    intend;  
}Node;  
Node V[N];  
intcmp(constvoid *a, constvoid *b)  
{  
    return(*(Node *)a).val - (*(Node*)b).val;  
}  
intedge[N][3] = {  { 0,1,3},  
                    {0,4,1},   
                    {1,2,5},   
                    {1,4,4},  
                    {2,3,2},   
                    {2,4,6},   
                    {3,4,7}  
                    };  
   
intfather[N] = { 0, };  
intcap[N] = {0,};  
   
void make_set()              //初始化集合，让所有的点都各成一个集合，每个集合都只包含自己  
{  
    for(inti = 0; i < N; i++)  
    {  
        father[i] = i;  
        cap[i] = 1;  
    }  
}  
   
int find_set(intx)              //判断一个点属于哪个集合，点如果都有着共同的祖先结点，就可以说他们属于一个集合  
{  
    if(x != father[x])  
     {                               
        father[x] = find_set(father[x]);  
    }      
    returnfather[x];  
}                                   
   
void Union(intx, inty)         //将x,y合并到同一个集合  
{  
    x = find_set(x);  
    y = find_set(y);  
    if(x == y)  
        return;  
    if(cap[x] < cap[y])  
        father[x] = find_set(y);  
    else  
    {  
        if(cap[x] == cap[y])  
            cap[x]++;  
        father[y] = find_set(x);  
    }  
}  
   
int Kruskal(intn)  
{  
    intsum = 0;  
    make_set();  
    for(inti = 0; i < N; i++)//将边的顺序按从小到大取出来  
    {  
        if(find_set(V[i].start) != find_set(V[i].end))     //如果改变的两个顶点还不在一个集合中，就并到一个集合里，生成树的长度加上这条边的长度  
        {  
            Union(V[i].start, V[i].end);  //合并两个顶点到一个集合  
            sum += V[i].val;  
        }  
    }  
    returnsum;  
}  
int main()  
{  
    for(inti = 0; i < N; i++)   //初始化边的数据，在实际应用中可根据具体情况转换并且读取数据,这边只是测试用例  
    {  
        V[i].start = edge[i][0];  
        V[i].end = edge[i][1];  
        V[i].val = edge[i][2];  
    }  
    qsort(V, N, sizeof(V[0]), cmp);  
    cout << Kruskal(0)<<endl;