### Canvas和SVG的区别？
1. Canvas是使用JavaScript程序绘图(动态生成)，SVG是使用XML文档描述来绘图。
2. SVG( Scalable Vector Graphics )，向量=矢量，故名为可缩放矢量图
3. 首先Canvas是html5提供的新元素```<canvas>```，而svg存在的历史要比canvas久远，svg并不是html5专有的标签，最初svg是用xml技术（超文本扩展语言，可以自定义标签或属性）描述二维图形的语言。
4. Canvas可以看做是一个画布，其绘制出来的图形为标量图，因此可以在canvas中引入jpg或png这类格式的图片。大型的网络游戏都是用canvas画布做出来的，并且canvas的技术现在已经相当的成熟。
5. Canvas中我们绘制图形通常是通过javascript来实现，SVG更多的是通过标签来来实现，如在svg中绘制正矩形形就要用```<rect>```
6. 另外从技术发面来讲canvas里面绘制的图形不能被引擎抓取，如我们要让canvas里面的一个图片跟随鼠标事件：canvas.onmouseover=function(){}。而svg里面的图形可以被引擎抓取，支持事件的绑定。
7. SVG所绘制的图形为矢量图，所以其用法上受到了限制。因为只能绘制矢量图，所以svg中不能引入普通的图片。因为矢量图的不会失真的效果，在项目中我们会用来做一些动态的小图标。因为矢量图可以被无限放大而不会失真，这很适合被用来做地图，而百度地图就是用svg技术做出来的。

