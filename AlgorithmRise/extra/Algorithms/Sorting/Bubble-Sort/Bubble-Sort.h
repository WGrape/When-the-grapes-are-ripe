#include <stdio.h>

// 函数声明
void sortByASC(int n, int *unSortedArray);
void sortByDESC(int n, int *unSortedArray);

/*
 * 冒泡排序 - 基本版( 遍历比较交换排序 )
 *
 * 思想 : 循环前 n-1 个数字 , 并依次与剩下的数字比较大小 , 根据排序规则和大小关系来决定是否交换
 * 特点 : 每次比较的时候都交换 , 并且外层每次循环时 , 此时都是要查找第 i+1 大(小)的数字
 * 优点 : 简单 , 易于理解 , 稳定( 几乎不受输入数据的影响 )
 * 缺点 : 时间复杂度O( n的2次方 )高 , 时间开销大 , 效率太低
 * 时间复杂度 : O(n的2次方)
 *
 * 假设有 n 个数字的序列 ,
 * 下标为 : 0, 1, 2, ... n-2, n-1
 *
 * 算法步骤
 * ① start : 从 index = 0 开始
 * ② compare : 将当前 index 下标的数字依次与剩下的数字target( target 从 index+1 至 n-1 )比较 , 按照大小关系和排序规则来决定是否交换 , 当与剩下的数字都比较过后结束
 * ③ loop for ② : index ++ 如果 index <=n-2 则再次执行② , 否则结束
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