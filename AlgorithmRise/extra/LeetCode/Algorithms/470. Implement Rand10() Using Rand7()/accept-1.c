// The rand7() API is already defined for you.
// int rand7();
// @return a random integer in the range 1 to 7

int rand10() {
    
    int a = rand7(), b= rand7();
    while( 1){
        if( !(a > 4 && b < 4))
            break;
        a = rand7(), b= rand7();
    }
            
    return (a+b) %10 + 1;
}

/*
	a	1	2	3	4	5	6	7
b								
1		2	3	4	5	6	7	8
2		3	4	5	6	7	8	9
3		4	5	6	7	8	9	0
4		5	6	7	8	9	0	1
5		6	7	8	9	0	1	2
6		7	8	9	0	1	2	3
7		8	9	0	1	2	3	4

去掉右上角的  
6	7	8
7	8	9
8	9	0      后
每个数字的出现次数为4次，0-9的概率相同
*/
// 注意此算法只有在C语言提交时能通过LeetCode
// 换成JS语言去描述此算法时，就无法提交通过了
// 所以可能还是因为此算法不够稳定
