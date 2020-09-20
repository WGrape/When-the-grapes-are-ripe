(function(){

	window.Profiler = function (){

		
	};


	window.Profiler.prototype = {

		receiveResponse: function(res){

			var data = (JSON.parse(res.data))[0];

			window.View.prototype.dynamicChangeView.useWebsocketShowDownloadProcess( data );
		}
	};



})();