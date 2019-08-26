(function(){

	window.MyWebSocket = function(){


	};

	window.MyWebSocket.prototype = {

		constructor : window.MyWebSocket,

		websocket: null,

		init: function(downloadQueue){

			if(this.websocket===null){

				// 创建 websocket 连接
				this.websocket = new WebSocket("ws://127.0.0.1:1234");
				this.websocket.onmessage = this.message;
			}

		},

		// 发送数据
		send : function( downloadQueue ){

			downloadQueue = JSON.stringify(downloadQueue);

			if(this.websocket===null){

				// 因为 new WebSocket() 内部肯定是用 setTimout 实现的
				// 所以下面的 send 也异步执行
				this.init(downloadQueue);
			}	

			// 异步 send
			setTimeout(function(){
				
				// 直接把队列传过去即可
				window.MyWebSocket.prototype.websocket.send(downloadQueue);
			},100);

		},

		message : function(e){

			window.Profiler.prototype.receiveResponse(e);
		}

	};

})();