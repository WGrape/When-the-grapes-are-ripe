(function(){


// 需求：
// 1. 下载中的那个input置为 disable, 不允许再下载，下载结束后，才能继续使用。


window.View = function(){


};


window.View.prototype = {

	constructor: window.View,

	init : function(){

		// 暂无任务
		$("#TaskContainer").append($("#TemplateOfTaskIsEmpty").html());

		// 事件注册
		this.eventsRegister();

	},

	// 事件注册
	eventsRegister: function(){

		this.addTask();
		this.startDownload();
		this.allStartDownload();
		this.allStopDownlaod();
		this.dynamicChangeView.onInput();
	},


	// 添加下载任务功能
	addTask: function(){

		$(document).on("click", "#AddTaskButton", function(){

			var count = parseInt($(this).attr("data-task-count"))+1;

			if(count>10){

				alert("最多只能添加10个任务");
				return;
			}

			$(this).attr("data-task-count", count );

			if(count===1){

				$("#TaskContainer").html("");
			}

			$("#TaskContainer").append($("#TemplateOfTask").html());
		});
	},


	checkInput: function(_this){
		
		var index =  _this.parent().parent().index();

		var keyword = _this.attr("data-keyword");
		var count = parseInt( _this.attr("data-count") );

		if(keyword===''){
			alert("下载任务 " + (index+1) +" ： 请输入内容");
			return false;
		}
		if(count<1||count>50){

			alert("下载任务 " + (index+1) +" : 每个任务只能下载1-50张");
			return false;
		}

		// 已经下载，就先不执行了 , 这个版本不支持暂停下载
		if(_this.attr("data-status")==1){

			return false;
		}

		if( _this.attr("data-status") === ''|| _this.attr("data-status") == 2){

			_this.attr("data-status", 1).attr("data-status-msg","正在下载").text("正在下载");
		}
		// 这个版本不支持暂停下载
		// else{

		// 	_this.attr("data-status", 2).attr("data-status-msg","已暂停").text("已暂停");
		// }

		_this.attr("data-id", index);

		return true;
	},

	// 开始下载
	startDownload(){

		$(document).on("click", ".startDownloadButton", function(){

			if(!window.View.prototype.checkInput($(this))){

				return;
			}

			var downloadQueue = [];
			downloadQueue.push(window.View.prototype.packageTask({

				"id": $(this).attr("data-id"),
				"keyword": $(this).attr("data-keyword"),
				"count": $(this).attr("data-count"),
				"downloadedCount": $(this).attr("data-downloaded-count"),
				"status": $(this).attr("data-status"),
				"statusMsg": $(this).attr("data-status-msg")
			}));
			window.Downloader.prototype.startDownload(downloadQueue);


			// 这个版本不支持暂停下载
			// if($(this).attr("data-status")==2){
			//	console.log("暂停任务 " + $(this).attr("data-id") + " : ");
			// }else{
			console.log("下载任务 " + $(this).attr("data-id") + " : ");
			// }
			console.log(downloadQueue);
		});
	},

	// 全部开始下载
	allStartDownload: function(){

		$(document).on("click", "#AllStartButton", function(){

			// 模拟点击全都“开始下载”按钮
			$(".startDownloadButton").click();
		});
	},

	// 全部停止下载
	allStopDownlaod: function(){

		$(document).on("click", "#AllStopButton", function(){

			// 模拟点击全部"开始下载"按钮
			$(".startDownloadButton").click();
		});
	},

	// 封装下载任务
	packageTask: function(task){

		return {

			"id": task.id,
			"keyword": task.keyword,
			"count": task.count,
			"downloadedCount": task.downloadedCount,
			"status": task.status, // -1(下载失败了) , 0(下载完成) , 1(正在下载), 2(下载被暂停) 
			"statusMsg": task.statusMsg
		};
	},


	dynamicChangeView: {

		// 使用 Websocket 显示下载进度
		useWebsocketShowDownloadProcess : function(data){

			id = data.id;
			keyword = data.keyword;
			count = data.count;
			downloadedCount = data.downloadedCount;
			status = data.status;
			statusMsg = data.statusMsg;

			// 下载完成
			if(downloadedCount>=count){

				// 此按钮不能再下载了
				$(".task").eq(id).find(".startDownloadButton").attr("data-status",0).text("下载成功").attr("disabled","disabled");

				// 也不能再输入了
				$(".task").eq(id).find("input").attr("disabled","disabled");
			}

			$(".task").eq(id).find(".startDownloadButton").attr("data-downloaded-count",downloadedCount);
			$(".task").eq(id).find(".visualDownloadContainer .processBar").css("width",(downloadedCount/count)*200);
			$(".task").eq(id).find(".downloadedCount").text(downloadedCount);
			$(".task").eq(id).find(".count").text(count);

			console.log("response.data : ");
			console.log(data);
		},

		onInput: function(){

			$(document).on("blur", ".input-keyword",function(){

				$(this).parent().parent().find(".startDownloadButton").attr("data-keyword", $(this).val());
			});

			$(document).on("blur", ".input-count",function(){

				$(this).parent().parent().find(".startDownloadButton").attr("data-count", $(this).val());
			});
		}

	}


};


})();