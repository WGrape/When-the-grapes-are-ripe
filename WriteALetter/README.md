# WriteALetter

<p align="center">
<img src="https://img.shields.io/badge/language-JavaScript-red.svg">
<img src="https://img.shields.io/badge/platform-web-orange.svg">
<img src="https://img.shields.io/badge/version-1.0-blue.svg">
</p>

利用原生 JavaScript 实现动态打字写信

## 介绍

<img src="./images/logo.gif">

**强调 ：重要的核心代码只有十几行左右，只要看懂了实现动态打字的原理，你就能快速切换并应用到其他的应用场景中，比如各种前端页面效果，只要你会写代码，你就能自己加入更多自己喜欢的特效 ！！！**<br><br>
目前版本样式做的比较粗糙，不过以后有新的想法的时候会不断的更新。
还是那句话：核心代码就十几行，自己可以选择应用到不同的场景中，并实现更多炫酷的效果 ！！

## 使用

> 1. 下载项目到本地
> 2. 配置 ```config.js``` 文件，配置信息如下
```
var config = {

	dom  : "Letter", // 主体 DOM , 只支持 id = ""

	// 关于信的内容
	name : "You",
	from : "Yours sincerely",
	date : "2018-12-05 15:20:30",

	speed: 110, // 打字速度 , 100 - 120 之间比较适合

	sideBar: true, // 是否开启侧边栏


};
```
> 3. 配置完之后，直接运行 index.html 文件即可。

## 功能
1. 自定义写一篇文章，文件后缀名 .txt 即可。
2. 上传文件，利用H5新API自动读取文件。
3. JavaScript以动态打字的特效输出每一个文字。
4. 自动记录文件的总行数和总字数。
5. 更多的特效，只要是你喜欢的，你都可以自己实现 ！！
6. ... ...

## 代码

1. 其实，主要不容易解决的地方在于如何一个一个的输出文字，一般来说必须使用 setTimeout() 和 setInterval()，但是写的时候，有很多种实现方式，稍不注意，就会出现这种情况：在使用多个 ```setInterval()```的时候，你还会发现输出的文字是乱序的，这就需要想办法去解决乱序问题，或者用其他方法替代，其实能实现的方法还是比较多的。各位大胆设想并实践即可。

2. 解决了一个一个文字的输出，此时你就能做到控制每一行了，具体怎么才能控制，估计每个人都能想到。为什么要控制每一行呢？因为只有控制了每一行，你才能加入更多的特效，比如下划线等 ( 愿意尝试的朋友可以试试 )。

3. 还有一个比较重要的就是，简单的输出文字没什么难度，但是输出具有样式的文字可能就稍微困难点了。其实实现的方式还是有很多，一般都是自己添加DOM，剩下的都是细节上的控制了。

4. 另外，本项目还用到了 H5 的新特性，使用了 [FileReader](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader) API，请自行去官网查看。 参考 : [Using files from web applications](https://developer.mozilla.org/zh-CN/docs/Web/API/File/Using_files_from_web_applications)


