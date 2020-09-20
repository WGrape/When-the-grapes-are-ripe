<?php

if(!isset( $_POST['text'])){

	return ;
}


//字体大小
$size = 5;

//字体类型，本例为宋体
// $font ="../fonts/simsunb.ttf";
$font ="../fonts/BASKVILL.TTF";

//显示的文字
$text = $_POST['text'];

// 创建一个空白图片
$img = imagecreate($_POST['width']*$size, $_POST['height']*$size);
// $img = imagecreate(6000, 6000);


//给图片分配颜色
imagecolorallocate($img, 0xFF, 0xFF, 0xFF);

//设置字体颜色
$black = imagecolorallocate($img, 0, 0, 0);

//将ttf文字写到图片中
imagettftext($img, $size, 0, 0, 0, $black, $font, $text);

//发送头信息
// header('Content-Type: image/gif');

imagepng($img,"../images/girl-ascii.jpg");

imagedestroy($img);

