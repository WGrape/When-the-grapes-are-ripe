(function(){
	
	var config;
	
	window.WordCloud = function(_config){

		config = _config;
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
			this.listenUploadWorsEvent();
		},

		generateId: function(word){

			return "word-" + md5(word);
		},

		generateColor: function(){

			return this.color[ Math.floor(Math.random()*10) ];
		},

		generateLocation: function(where){

			var opportunity = Math.floor(Math.random()*100);

			var distance;

			if(opportunity%2==0){

				distance = Math.random()*500;
			}else{

				distance = Math.random()*100;
			}

			if(where==="marginLeft"){

				distance = (distance>383)?383:distance;
			}else{

				distance = (distance>300)?300:distance;
			}

			return distance;
		},

		generateFontSize: function(){

			return this.fontSize[ Math.floor(Math.random()*10) ];
		},

		// 监听添加词事件
		listenAddWordEvent: function(){

			$("#WordCloud .head .right .wordInput").keypress(function (e) {
                if (e.keyCode == 13) {
                    
                    window.WordCloud.prototype.handleAddWordEvent();
                }
			});

			$(document).on("click", "#WordCloud .head .right .addWordButton", function(){

				window.WordCloud.prototype.handleAddWordEvent();
			});
		},

		// 处理添加词事件
		handleAddWordEvent: function(){

			var val = $("#WordCloud .head .right .wordInput").val();
			if($.trim(val)===''){

				alert("输入不能为空 ！");
				return;
			}

			// this.frequencyLimit();

			$("#WordCloud .head .right .wordInput").val("");

			this.add(val);
		},

		// 频率限制
		frequencyLimit:function(){

			$("#WordCloud .head .right .wordInput").attr("disabled","disabled");
			$("#WordCloud .head .right .addWordButton").attr("disabled","disabled");
			setTimeout(function(){

				$("#WordCloud .head .right .wordInput").removeAttr("disabled");
				$("#WordCloud .head .right .addWordButton").removeAttr("disabled");
			},1000);
		},



		listenUploadWorsEvent: function(){

			$(document).on("change","#FileInputTag",function(){

				var reader = new FileReader();
				reader.readAsText(document.getElementById("FileInputTag").files[0]);
				reader.onload = function(){

					var buffer = this.result.split("\n");
					var index = 0, len = buffer.length;

					window.WordCloud.prototype.add(buffer[index]);
					var clock = setInterval(function(){

						if(index>=len){

							clearInterval(clock);return;
						}

						var word = $.trim(buffer[index]);
						if(word!=""){

							window.WordCloud.prototype.add( word );
						}

						++index;
					}, config.speed);

				};
			});
		},


		// 添加新的词
		add: function(word){

			this.wordDatabase.push(word);

			var id = this.generateId(word);

			this.fallIntoCloud(id, $("<span class='word' id='"+ id +"'>"+word+"</span>"));
		},

		// 删除某个词
		remove : function(word){

			$("#WordCloud .container").find("#"+ this.generateId() ).remove();
		},

		// 新的dom标签掉落到云中
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
				
				// 之所以写这两个是因为不知道为什么，有时候上面设置的总是会影响到这个新加上去的。
				// 这两行不能删除
				"margin-left":0,
				"margin-top":130,
			}).addClass("large");
			setTimeout(function(){
				$("#"+id).removeClass("large");
			},5000);
				
			setTimeout(function(){

				$("#WordCloud .body .container").removeClass("animate");
			},100);
		}

	};

})();

