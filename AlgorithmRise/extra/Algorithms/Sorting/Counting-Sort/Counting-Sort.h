#include <stdio.h>

// 函数声明
void sortByASC(int *sortedArray, int max);

void sortByDESC(int *sortedArray, int max);

/*
 * 计数排序 - 基本版
 *
 * 思想 : 将数字放到数组下标对应起来 , 如 : 把数字5放到数组[5]里面 , 并将[5]的值自增
 * 特点 : 就和打牌一样
 * 优点 : 效率高 , 时间少
 * 缺点 : 以空间换时间 , 不稳定( 受输入数据影响 , 输入数据如果极端的话 , 效率会有很大影响 )
 * 时间复杂度 : O( n + k )
 *
 */
void sort(int n, int sortRule, int *unSortedArray) {

    // 定义一个排序后的数组
    int sortedArray[2000] = {0};

    int max = -9999; // 最大数字

    for (int i = 0; i <= n - 1; ++i) {

        if (unSortedArray[i] > max) {

            max = unSortedArray[i];
        }

        sortedArray[unSortedArray[i]]++;
    }

    if (sortRule == 1) {

        sortByASC(sortedArray, max);
    } else {

        sortByDESC(sortedArray, max);
    }
}


// 升序排序
void sortByASC(int *sortedArray, int max) {

    printf("\n排序方法 : 计数排序\n排序规则 : 升序 \n");

    printf("此次排序后的序列为 : \n");

    for (int i = 0; i <= max; ++i) {

        if (sortedArray[i] > 0) {

            // 输出多少次 sortedArray[i] 次 i 的值
            for (int j = 1; j <= sortedArray[i]; ++j) {

                printf("%d ", i);
            }
        }

    }

    printf("\n");
}

// 降序排序
void sortByDESC(int *sortedArray, int max) {

    printf("\n排序方法 : 计数排序\n排序规则 : 降序 \n");

    printf("此次排序后的序列为 : \n");

    for (int i = max; i >= 0; --i) {

        if (sortedArray[i] > 0) {

            // 输出多少次 sortedArray[i] 次 i 的值
            for (int j = 1; j <= sortedArray[i]; ++j) {

                printf("%d ", i);
            }
        }

    }

    printf("\n");
}
