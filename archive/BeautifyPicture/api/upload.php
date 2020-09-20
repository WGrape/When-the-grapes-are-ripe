<?php

//  [file] => Array
// (
// 		[name] => eason.jpg
// 		[type] => image/jpeg
// 		[tmp_name] => D:\...\tmp\php5096.tmp
// 		[error] => 0
// 		[size] => 265667
// )

// 删除目录下的所有文件
function deleteAllFiles($dir){

	if(!is_dir($dir)){

		mkdir($dir);
	}

	chmod($dir,0777);
	$fileArr = scandir($dir);

	foreach( $fileArr as $key => $file ){

		$file = $dir.$file;
		if(is_file($file)){

			unlink($file);
		}
	}

}


$response = ["code"=>0, "data"=>[], "msg"=>"success"];

if ($_FILES["file"]["error"] > 0){

	$response["code"] = -1;
	$response["msg"] = "The server is failed to receive !";

}else if(! in_array($_FILES["file"]["type"], ["image/jpeg","image/png","image/jpg","image/gif"]) ){

	$response["code"] = -2;
	$response["msg"] = "The server only accepts the file of img !";

}/*else if( ($_FILES["file"]["size"]/1024/1024) > 5 ){
	
	// 暂时不知道是否限制图片的大小
	$response["code"] = -3;
	$response["msg"] = "The server only accepts pictures within 5M !";

}*/else{

	if($_FILES["file"]["type"]=="image/jpeg"){
		
		$img_extension = "jpeg";
	}else if($_FILES["file"]["type"]=="image/png"){
		
		$img_extension = "png";
	} else if($_FILES["file"]["type"]=="image/jpg"){

		$img_extension = "jpg";
	} else{

		$img_extension = "gif";
	}

	$file_name = "girl-". md5(rand(-9999,9999)) .".{$img_extension}";
	$response['data'] = [

		"name" => $file_name,
	];

	deleteAllFiles("../images/");

 	move_uploaded_file($_FILES["file"]["tmp_name"], "../images/{$file_name}");
}


echo json_encode($response);
