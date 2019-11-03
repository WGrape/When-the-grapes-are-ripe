#include <stdio.h>
#include "common.h";
//#include "Bubble-Sort/Bubble-Sort.h";   // 冒泡排序
//#include "Bubble-Sort/Bubble-Sort-1.h"; // 冒泡排序-1 (插入排序)

#include "Counting-Sort/Counting-Sort.h"; // 计数排序

int main() {

    while (1) {

        int n = 0, sortRule = 0;
        int unSortedArray[2000] = {0};

        while (n <= 0 || n >= 1000 || (sortRule != 1 && sortRule != 2)) {

            printf("\n请输入待排序序列的长度 n 和 排序规则( 1:升序, 2:降序 ): ");
            scanf("%d%d", &n, &sortRule);
        }

        printf("\n请依次输入序列中的数字 : ");
        for (int i = 0; i <= n - 1; ++i) {

            scanf("%d", &unSortedArray[i]);
        }

        sort(n, sortRule, unSortedArray);
        printArray(n, unSortedArray);
    }

    return 0;
}

