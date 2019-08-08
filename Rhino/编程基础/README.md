### 如何高效阅读别人的代码？你阅读别人代码的方法是什么 ？

### 

alert( ""||""||"s" ) // 弹出 s

### 编译时和运行时的区别
怎么区分这2个概念 ？

<img src="https://raw.githubusercontent.com/Lvsi-China/PublicImgs/master/2019/04/82FEBD1B4BBFC484DDB08A706CB71106.png">

```c
// 我想到了一个很好的方法来解释这两个概念
// 在讲的同时，顺便讲C编译型语言和PHP脚本语言的不同之处。主要看上面这个图片

#include <msgpack.h>
#include <stdio.h>

int main(void) {

    FILE *fp = NULL;

    fp = fopen("./test.txt", "w+"); // 这里会把文件存储在 cmake-build-debug 文件夹内

    fprintf(fp, "This is testing for fprintf...\n");
    fputs("This is testing for fputs...\n", fp);
    fclose(fp);

}

```

下面的解释 ：
```

编译型语言就是代码需要先经过编译，编译完之后，会生成一些可执行的文件和依赖的库(可能)，反正就是，最后执行的代码是编译后的代码，而不是你的源代码。

编译后的代码如果不和源代码在同一目录下，我
们就能清楚的看到编译型语言和解释型语言的不同了。如上面，最后生成的文件是在 cmake-build-debug 文件夹内，而不是在源码的同级目录下。

如上面的代码，我的原意是想让生成的文件和源码是在同一个目录下，但是我的原意只能在 编译时 成立 ，不会在 运行时 成立 。

因为编译时一切以源代码为准，
但在运行时一切以编译后的代码为准备 。

```


### 什么才算是真正的编程能力？
- [什么才算是真正的编程能力？](https://www.zhihu.com/question/31034164/answer/50423838)



