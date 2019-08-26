<?php

function getCURL($url){

	$ch = curl_init();

	// 设置 URL
	curl_setopt($ch, CURLOPT_URL, $url);

	// 禁止 cURL 验证对等证书
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0); // 0 为不检查名称
		

	// 不传输数据
	curl_setopt($ch, CURLOPT_POST, 0);

	// 要求返回值
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	return $ch;
}


function curlBaidu($url, $keyword, $numberId, $taskId){

	// 获取CURL
	$ch = getCURL($url);

	// 执行
	$resource = curl_exec($ch);

	// preg_match_all("/\"objURL\":\".+\.jpg\"/", $resource, $matchs);
	// $pattern = "/\"objURL\":\".+\.jpg\"/";
	$pattern = '/objURL":"(.*?)",/';
	preg_match_all($pattern, $resource, $matchs);

	// 关闭 CURL
	curl_close($ch);

	return $matchs;
}

function curlResource($url, $keyword, $numberId, $taskId){

	// 获取CURL
	$ch = getCURL($url);
	
	// 执行
	$resource = curl_exec($ch);

	// 保存到本地
	$dir = "../resources/{$taskId}-{$keyword}/";
	if(!is_dir($dir)){

		mkdir($dir, 0777, true);
	}
	$file=fopen("{$dir}/{$numberId}.jpg","w+");
	fwrite($file, $resource);
	fclose($file);
}


