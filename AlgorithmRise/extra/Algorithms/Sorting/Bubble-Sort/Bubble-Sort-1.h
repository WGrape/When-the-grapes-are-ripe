#include <stdio.h>

// 函数声明
void sortByASC(int n, int *unSortedArray);
void sortByDESC(int n, int *unSortedArray);

/*
 * 冒泡排序-1级版 ( 又称选择排序 )
 *
 * 优化 : 增加了哨兵 , 每趟只交换1次
 * 优点 : 明显减少了交换次数 , 明显减少了无关操作 , 加快处理速度
 * 缺点 : 时间复杂度没有改变 , 仍然是O(n的2次方)
 * 时间复杂度 : O(n的2次方)
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

    // 定义哨兵 , 记录着的当前的最小/大值的下标
    int sentryRecordedIndex = 0;

    // 交换次数
    int count = 0;

    // index
    for (int i = 0; i <= n - 2; ++i) {

        // 先把当前index值赋值给哨兵
        sentryRecordedIndex = i;

        // target
        for (int j = i + 1; j <= n - 1; ++j) {

            // 升序
            if (unSortedArray[sentryRecordedIndex] > unSortedArray[j]) {

                sentryRecordedIndex = j;
            }

        }

        // 如果sentryRecordedIndex值发生改变 , 则交换
        if (sentryRecordedIndex != i) {

            ++count;
            swap(&unSortedArray[i], &unSortedArray[sentryRecordedIndex]);
        }
    }

    printf("\n排序方法 : 冒泡排序-1\n排序规则 : 升序 \n交换次数 : %d 次\n", count);

}


// 降序排序
void sortByDESC(int n, int *unSortedArray) {


    // 定义哨兵 , 记录着的当前的最小/大值的下标
    int sentryRecordedIndex = 0;

    // 交换次数
    int count = 0;

    // index
    for (int i = 0; i <= n - 2; ++i) {

        // 先把当前index值赋值给哨兵
        sentryRecordedIndex = i;

        // target
        for (int j = i + 1; j <= n - 1; ++j) {

            // 降序
            if (unSortedArray[sentryRecordedIndex] < unSortedArray[j]) {

                sentryRecordedIndex = j;
            }
        }

        // 如果sentryRecordedIndex值发生改变 , 则交换
        if (sentryRecordedIndex != i) {

            ++count;
            swap(&unSortedArray[i], &unSortedArray[sentryRecordedIndex]);
        }
    }

    printf("\n排序方法 : 冒泡排序-1\n排序规则 : 降序 \n交换次数 : %d 次\n", count);
}

