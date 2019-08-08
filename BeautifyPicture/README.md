# BeautifyPicture

<p align="center">
<img src="https://img.shields.io/badge/language-js/php-red.svg">
<img src="https://img.shields.io/badge/platform-web-orange.svg">
<img src="https://img.shields.io/badge/version-1.0-blue.svg">
<img src="https://img.shields.io/badge/license-MIT-black.svg">
</p>

照片美化工具（A Tool for Beautifying Your Picture）。 [立即使用](#article-usage)

<br>

## ♨ 介绍( Introduction )

项目主要利用 Canvas 的绘制功能，使用 JS 和 PHP 构建。

<img width="700px" src="https://github.com/Lvsi-China/BeautifyPicture/raw/master/logo.gif">

> ### 功能会不断更新( Updating Features ) ...

<br>

## <span id="article-usage">♗ 使用（Usage）</span>

```
1. 下载项目 ( Download )

2. 开启本地 Apache 服务器，打开 index.html 页面，然后按提示操作即可 。
```
<br>

## ✪ 功能( Features )
1. 图片转成 Ascii码 文字(下个版本将会增加转成 Ascii码图片 功能)
2. 图片反色
3. 图片转成灰度图片
4. 更多功能下个版本中会实现并尽快提交

## ♚ 代码( Code )

1. 对于图片转成 Ascii 码文字，无非是读取图片中每一个像素点的数据, 其中每一个像素点包括 R,G,B,A 这4个数据。然后根据这4个数据去使用一套算法(算法实现比较多，可以Google自行选择参考)将每个像素转成灰度的Ascii码。按照同样的方法遍历全部的像素即可。可以利用 Java, PHP, Python 等后端语言实现，也可以使用 Canvas，我使用的就是 Canvas。

## ✔ 发行版( Releases)
目前有2个发行版，分别是 [1.0](https://github.com/Lvsi-China/BeautifyPicture/releases/tag/v-1.0) 和 [1.0.1](https://github.com/Lvsi-China/BeautifyPicture/releases/tag/v-1.0.1)，后续会更新并发行新版本 。

