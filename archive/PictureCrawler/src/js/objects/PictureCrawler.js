(function(){


	window.PictureCrawler = function (){

		
	}


	window.PictureCrawler.prototype = {

		constructor: window.PictureCrawler,

		startDownload: function(downloadQueue){

			window.MyWebSocket.prototype.send(downloadQueue);			
		},

	};


})();