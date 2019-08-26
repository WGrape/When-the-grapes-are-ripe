<?php

use Workerman\Worker;

require_once '../Workerman/Autoloader.php';

require_once "../php/curl.php";

// 创建一个Worker监听2345端口，使用http协议通讯
$http_worker = new Worker("websocket://0.0.0.0:1234");

// 启动4个进程对外提供服务
$http_worker->count = 4;

// 接收到浏览器发送的数据时回复hello world给浏览器
$http_worker->onMessage = function($connection, $data)
{

	$data = json_decode($data, TRUE);

	$count = $data[0]['count']; // 下载总量	
	$downloadedCount = $data[0]['downloadedCount']; // 已下载的数量
	$keyword = $data[0]['keyword'];
	$numberId = $downloadedCount+1;
	$taskId = $data[0]['id'];

	$matchs = curlBaidu("https://image.baidu.com/search/index?tn=baiduimage&word={$keyword}", 
	$keyword, $numberId, $taskId);

	echo "\ntaskId : {$taskId} , downloading ... \n";

	if(isset($matchs[1])&&is_array($matchs[1])){

		foreach ($matchs[1] as $img_url) {

			// 下载数量多于count时，退出( 爬到很多图片的情况 )
			if($downloadedCount>=$count){

				break;
			}

			++$downloadedCount;

			curlResource($img_url, $keyword, $downloadedCount, $taskId);

			$data[0]['downloadedCount'] = $downloadedCount;
	    	$connection->send(json_encode($data,JSON_UNESCAPED_UNICODE)); // 向浏览器发送
		}
	}

	// 爬取到的图片不够数
	while($downloadedCount<$count){

		++$downloadedCount;
		$data[0]['downloadedCount'] = $downloadedCount;
    	$connection->send(json_encode($data,JSON_UNESCAPED_UNICODE)); // 向浏览器发送
	}
	
};

// 运行worker
Worker::runAll();

