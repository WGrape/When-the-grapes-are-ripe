#include <stdio.h>

// 函数声明
void sortByASC(int n, int *unSortedArray);

void sortByDESC(int n, int *unSortedArray);

/*
 * 插入排序
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

    // 比较次数
    int count = 0;

    for (int i = 1; i <= n - 1; ++i) {

        for (int j = i - 1; j >= 0; ++j) {


        }
    }
}


// 降序排序
void sortByDESC(int n, int *unSortedArray) {

}