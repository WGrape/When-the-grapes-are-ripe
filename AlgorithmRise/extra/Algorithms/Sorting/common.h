
// 打印数组
void printArray(int n, int *unSortedArray) {

    printf("此次排序后的序列为 : \n");

    for (int i = 0; i <= n - 1; ++i) {

        printf("%d ", unSortedArray[i]);
    }

    printf("\n");
}

// 交换值
void swap(int *a , int *b){

    // 临时变量 , 当数字交换时使用
    int temp = 0;

    temp = *a;
    *a = *b;
    *b = temp;
}