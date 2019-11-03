#include <stdio.h>

// 函数声明
void sortByASC(int n, int *unSortedArray);

void sortByDESC(int n, int *unSortedArray);

/*
 * 快速排序 - 基本版
 *
 * 思想 : 从后往前，将每一个元素都作为排序的基准，小于等于它的排它的前面，大于它的排它的后面
 * 特点 :
 * 优点 :
 * 缺点 :
 * 时间复杂度 :
 *
 * 假设有 n 个数字的序列 ,
 * 下标为 : 0, 1, 2, ... n-2, n-1
 *
 * 算法步骤
 * ① index=n-1 , index--（index依次递减），每次的 arr[index]都作为此次排序的基准
 * ② compare : 遍历 arr 数组，小于等于 arr[index] 的数都排在 arr[index] 前面，大于 arr[index] 的数排在 arr[index] 后面
 * ③ loop for ② : index -- 如果 index >=0 则再次执行② , 否则结束
 * ④ end : 结束
 *
 */
void sort(int n, int sortRule, int *unSortedArray) {

    if (sortRule == 1) {

        sortByASC(n, unSortedArray);
    } else {

        sortByDESC(n, unSortedArray);
    }
}


// 升序排序
void sortByASC(int n, int *unSortedArray) {

    // 交换次数
    int count = 0;

    // index
    for (int i = 0; i <= n - 2; ++i) {

        // target
        for (int j = i + 1; j <= n - 1; ++j) {

            // 升序
            if (unSortedArray[i] > unSortedArray[j]) {

                ++count;
                swap(&unSortedArray[i], &unSortedArray[j]);
            }
        }
    }


    int index = n - 1;
    while (index >= 0) {



        index--;
    }

    printf("\n排序方法 : 冒泡排序\n排序规则 : 降序 \n交换次数 : %d 次\n", count);
}


// 降序排序
void sortByDESC(int n, int *unSortedArray) {

    // 交换次数
    int count = 0;

    // index
    for (int i = 0; i <= n - 2; ++i) {

        // target
        for (int j = i + 1; j <= n - 1; ++j) {

            // 降序
            if (unSortedArray[i] < unSortedArray[j]) {

                ++count;
                swap(&unSortedArray[i], &unSortedArray[j]);
            }
        }
    }

    printf("\n排序方法 : 冒泡排序\n排序规则 : 降序 \n交换次数 : %d 次\n", count);
}