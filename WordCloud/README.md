# WordCloud

<p align="left">
<img src="https://img.shields.io/badge/language-JavaScript-red.svg">
</p>

原生JavaScript实现词云特效

## 摘要

<img src="./extra/images/logo.gif">

## 介绍

在写 [EnglishKeeper](https://github.com/WGrape/EnglishKeeper) 项目的时候，需要有词云功能，于是就单独先把这个 [WordCloud](https://github.com/WGrape/WordCloud) 项目抽离出来了。由于是自己学习记忆单词时使用的词云工具，不能太过花哨。所以，也没在样式上花费时间，不过大家可以自己修改源码创作自己喜欢的特效。

## 使用

> 1. 下载项目到本地
> 2. 配置 ```config.js``` 文件，配置信息如下
```
var config = {

	"speed": 1000, // 读取上传文件时，输出每一个词的速度
};
```
> 3. 配置完之后，直接运行 index.html 文件即可。

## 说明

1. 此项目是附属于 [EnglishKeeper](../EnglishKeeper) 项目的，目的都只是为了方便自己学习英文。因此，在学习过程中，会根据自身的需求，来不定时的更新这两个项目。

2. 对于自己输入的场景：每输入一个词都会下落到云中，这个没有速度要求，所以就没添加速度功能。

3. 对于上传文件的场景：上传的文件是以```换行符```为分隔的，所以每个词之间使用换行符隔开。如下：
```
圣诞结
七百年后
时光倒流二十年
```
因为有多个词，所以可以配置每个单词下落的速度，具体可查看配置。


## 代码

核心代码都在```src/js/WordCloud.js```文件中，WordCloud 对象负责所有的交互，部分代码如下 : 

```
window.WordCloud = function(){


};

window.WordCloud.prototype = {

	constructor: window.WordCloud,

	color: [ "#8A2BE2", "#FF69B4", "#FF0000" , "#7B68EE", "#228B22", "#98F898", "#00BFFF", "#008B8B", "#483D8B", "#32CD32" ],
	fontSize:[13,14,15,16,17,18,19,20,21,22],

	wordDatabase: [],

	init: function(){

		this.eventsRegister();
	},

	eventsRegister: function(){

		this.listenAddWordEvent();
		this.listenuploadWorsEvent();
	},
};
``` 

JavaScript负责特效的部分代码如下：
```
fallIntoCloud: function(id, dom){

	$("#WordCloud .body .container .word").removeClass("large").last().css({

		"font-size":this.generateFontSize(),
		"margin-left": window.WordCloud.prototype.generateLocation("marginLeft"), 
		"margin-top": window.WordCloud.prototype.generateLocation("marginTop")
	});
	
	$("#WordCloud .body .container").append(dom).addClass("animate");
	
	$("#"+id).css({
		
		"font-size": 50,
		"color": window.WordCloud.prototype.generateColor(),
		
		"margin-left":0,
		"margin-top":130,
	}).addClass("large");		
		
	setTimeout(function(){

		$("#WordCloud .body .container").removeClass("animate")
	},100);
}
```
