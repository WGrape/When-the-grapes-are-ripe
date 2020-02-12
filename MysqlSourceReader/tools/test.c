#include "stdio.h"

// char

void f(unsigned char v) {

    char c = v;
    unsigned char uc = v;

    unsigned int a = c, b = uc;

    int i = c, j = uc;

    printf("----------------\n");
    printf("%%c: %c, %c\n", c, uc);
    printf("%%X: %X, %X\n", c, uc);
    printf("%%u: %u, %u\n", a, b);
    printf("%%d: %d, %d\n", i, j);
}

int main() {

    printf("\n");

    printf("二进制 : %d\n", 0b100);
    printf("\n");

    printf("char : %d byte\n", (int) sizeof(char));
    printf("unsigned char : %u byte\n", (int) sizeof(unsigned char));
    printf("\n");

    printf("int : %d byte\n", (int) sizeof(int));
    printf("unsigned int : %u byte\n", (int) sizeof(unsigned int));
    printf("\n");

    printf("size_t : %d byte\n", (int) sizeof(size_t));
    printf("\n");

    printf("-23 无符号展示 : %u\n", -23);
    printf("-23 有符号展示 : %d\n", -23);

    return 0;

    f(0x80);
    f(0x7F);
    return 0;

    printf("%c", 0x4e);
    return 0;

    unsigned char buffer[1000];
    FILE *ptr;

    ptr = fopen("/Users/yimutian/Lvsi/github/When-the-grapes-are-ripe/MysqlSourceReader/tools/a.txt",
                "rb");  // r for read, b for binary

    fread(buffer, sizeof(buffer), 1, ptr); // read 10 bytes to our buffer

    for (int i = 0; i < 100; i++)
        printf("%#X ", buffer[i]); // prints a series of bytes

    printf("\n\n");

    for (int i = 0; i < 100; i++)
        printf("%x ", buffer[i]); // prints a series of bytes

    printf("\n\n");

    printf("长度为 %u", sizeof(buffer));

    return 0;
}