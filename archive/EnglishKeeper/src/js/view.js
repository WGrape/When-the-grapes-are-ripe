(function(){

window.View = function(){


};

window.View.prototype = {

	constructor: window.View,

	init : function(){

		this.eventsRegister();
	},

	eventsRegister: function(){

		this.listenClickMenu();
		this.listenClickOption();

		this.listenViewOfOption.listenGetVocabulary();
		this.listenViewOfOption.listenAddWord();
		this.listenViewOfOption.listenDeleteWord();

		this.listenViewOfOption.listenGetPhrase();
		this.listenViewOfOption.listenAddPhrase();
		this.listenViewOfOption.listenDeletePhrase();
	},

	// 监听点击菜单按钮
	listenClickMenu: function(){

		$(document).on("click", "#Right button#Menu", function(){

			$(this).addClass("click");
			setTimeout(function(){ $("#Right button#Menu").removeClass("click") },200);

			$("#Bottom").slideToggle();
		});
	},

	// 监听点击功能按钮
	listenClickOption: function(){

		$(document).on("click", "#Bottom .option-list .option", function(){

			$("#Bottom").slideToggle();
			clearInterval(window.View.prototype.dispatchOption.vocabulary.readClock);
			
			let optionName = $(this).attr("data-option-name");

			$(".view-for-option").fadeOut();
			$(".view-for-option").each(function(){

				if(optionName ===$(this).attr("data-option-name")){
					
					$(this).fadeIn();
				}
			});

			switch(optionName){

				case "vocabulary": window.View.prototype.dispatchOption.vocabulary.getVocabulary(); break;

				case "phrase": window.View.prototype.dispatchOption.phrase.getPhrase();

				default: break;
			}

		});
	},

	// 监听选项视图内的事件
	listenViewOfOption:{

		// 监听词库事件
		listenGetVocabulary: function(){

			$(document).on("click", window.View.prototype.getDomLocationText("get-button"), function(){

				setTimeout(function(){

					// 直接显示的话由于本地速度过快，所以不会执行
					$( window.View.prototype.getDomLocationText("get-button") ).text("获取中...");
				},10);
				window.View.prototype.dispatchOption.vocabulary.getVocabulary( $(window.View.prototype.getDomLocationText("word-input")).val() );
			});
		},

		listenAddWord: function(){

			$(window.View.prototype.getDomLocationText("word-input")).keypress(function (e) {
                if (e.keyCode == 13) {
                    
                    window.View.prototype.handleViewOfOption.handleAddWordEvent();
                }
			});
			
			$(document).on("click", window.View.prototype.getDomLocationText("add-button"), function(){
				window.View.prototype.handleViewOfOption.handleAddWordEvent();
			});
		},

		listenDeleteWord: function(){

			$(document).on("click", window.View.prototype.getDomLocationText("delete-button"), function(){

				$(window.View.prototype.getDomLocationText("delete-button")).text("删除中...");
				window.View.prototype.dispatchOption.vocabulary.deleteWord( $(window.View.prototype.getDomLocationText("word-input")).val() );
			});
		},

		// 监听短语库事件
		listenGetPhrase: function(){

			$(document).on("click", window.View.prototype.getDomLocationText("phrase-get-button"), function(){

				setTimeout(function(){

					// 直接显示的话由于本地速度过快，所以不会执行
					$( window.View.prototype.getDomLocationText("phrase-get-button") ).text("获取中...");
				},10);

				let input = $(window.View.prototype.getDomLocationText("phrase-word-input")), firstChar = input.val();
				input.val("");
				window.View.prototype.dispatchOption.phrase.getPhrase( firstChar );
			});
		},

		listenAddPhrase: function(){

			$(window.View.prototype.getDomLocationText("phrase-word-input")).keypress(function (e) {
				if (e.keyCode == 13) {
					
					window.View.prototype.handleViewOfOption.handleAddPhraseEvent();
				}
			});
			
			$(document).on("click", window.View.prototype.getDomLocationText("phrase-add-button"), function(){
				window.View.prototype.handleViewOfOption.handleAddPhraseEvent();
			});
		},

		listenDeletePhrase: function(){

			$(document).on("click", window.View.prototype.getDomLocationText("phrase-delete-button"), function(){

				window.View.prototype.handleViewOfOption.handleDeletePhraseEvent(); // A 6 表示A短语库的第6个
			});
		}

	},

	// 处理选项视图内的点击
	handleViewOfOption: {

		handleAddWordEvent: function(){

			let val = $(window.View.prototype.getDomLocationText("word-input")).val();
			if($.trim(val)===''){

				alert("输入不能为空");return;
			}
			let buffer = val.split(" ");
			if(buffer.length!=2){

				alert("输入格式不正确");return;
			}
			$(window.View.prototype.getDomLocationText("add-button")).text("添加中...");
			window.View.prototype.dispatchOption.vocabulary.addWord( {"spell":buffer[0], "explain":buffer[1]} );
		},

		handleAddPhraseEvent: function(){

			let val = $(window.View.prototype.getDomLocationText("phrase-word-input")).val();
			if($.trim(val)===''){

				alert("输入不能为空");return;
			}
			let buffer = val.split("#");
			if(buffer.length!=2){

				alert("输入格式不正确");return;
			}
			$(window.View.prototype.getDomLocationText("phrase-add-button")).text("添加中...");
			window.View.prototype.dispatchOption.phrase.addPhrase( {"spell":buffer[0], "explain":buffer[1]} );
		},

		handleDeletePhraseEvent: function(){

			let val = $(window.View.prototype.getDomLocationText("phrase-word-input")).val();
			$(window.View.prototype.getDomLocationText("phrase-word-input")).val("");
			if($.trim(val)===''){

				alert("输入不能为空");return;
			}
			let buffer = val.split(" ");
			if(buffer.length!=2){

				alert("输入格式不正确");return;
			}
			$(window.View.prototype.getDomLocationText("phrase-delete-button")).text("删除中...");
			window.View.prototype.dispatchOption.phrase.deletePhrase( buffer[0], buffer[1] );
		},
	},

	dispatchOption: {

		vocabulary: {

			// 朗读单词的计时器
			readClock:null,

			// 获取词汇
			getVocabulary: function(firstChar=""){

				firstChar = (firstChar = firstChar.toUpperCase())===""?"A":firstChar;

				// 显示释义和发音
				function add(wordCloud, words, index){
	
					if("spell" in words[index] && words[index].spell != ""){
		
						wordCloud.add( words[index].spell );	
					}
					
					setTimeout(function(){
						$("#WordCloud .head i").removeClass("fa-volume-down").addClass("fa-volume-up");
					},100);
					$("#WordCloud .head .explain").text(words[index].explain);
					$("#WordCloud audio").attr("src", "http://dict.youdao.com/dictvoice?audio="+words[index].spell);
					
					return index+1;
				}
	
				// 多次点击时，清除计时器
				let clock=this.readClock;
				$("#WordCloud .body .container").html("");
				$("#WordCloud").fadeIn();
				clearInterval(clock);
				
				// 请求词库
				$.get("http://localhost:5217/?business=getVocabulary&firstChar="+firstChar, function(data){
	
					$(window.View.prototype.getDomLocationText("get-button")).text("获取成功");
					setTimeout(function(){
						$(window.View.prototype.getDomLocationText("get-button")).text("获取词库");
					},1000);

					let words = JSON.parse(data).data.words;
					let wordCloud = new window.WordCloud({"speed":1000});
					if(words.length<1){
						alert("当前"+firstChar+"-词库为空");
						return;
					}
	
					let index = add(wordCloud, words, 0);
					window.View.prototype.dispatchOption.vocabulary.readClock = clock = setInterval(function(){
						
						$("#WordCloud .head i").removeClass("fa-volume-up").addClass("fa-volume-down");
						$("#WordCloud audio").attr("src", "");
						if(index>words.length-1){
	
							clearInterval(clock); // 清除计时器
							return;
						}
	
						index = add(wordCloud, words, index);
					},3600);
				});
			},

			// 添加单词
			addWord: function(word){

				$.ajax({

                    type:  "get" ,
                    url:   "http://localhost:5217/?business=addWord&spell="+word.spell+"&explain="+word.explain,
                    async: true,
                    success:function(data){

                        data = JSON.parse(data);
						if(data.code!=0){

							alert("添加失败了！");
							return;
						}

						$(window.View.prototype.getDomLocationText("add-button")).text("添加成功");
                    },
                    error:function( e ){

                        alert(e);
                    },
                    complete:function(){

						$(window.View.prototype.getDomLocationText("word-input")).val("");
						setTimeout(function(){
							$(window.View.prototype.getDomLocationText("add-button")).text("添加");
						},1000);
                    }
                });
			},

			// 删除单词
			deleteWord: function(spell){

				if($.trim(spell)===''){

					alert("单词不能为空");return;
				}

				$.ajax({

                    type:  "get" ,
                    url:   "http://localhost:5217/?business=deleteWord&spell="+spell,
                    async: true,
                    success:function(data){

                        data = JSON.parse(data);
						if(data.code!=0){

							alert("删除失败了！");
							return;
						}

						$(window.View.prototype.getDomLocationText("delete-button")).text("删除成功");
                    },
                    error:function( e ){

                        alert(e);
                    },
                    complete:function(){

                    	$(window.View.prototype.getDomLocationText("word-input")).val("");	
						setTimeout(function(){
							$(window.View.prototype.getDomLocationText("delete-button")).text("删除");
						},1000);
                    }
                });
			}
		},

		phrase: {

			getPhrase: function(firstChar=""){

				$("#WordCloud audio").attr("src", "");
				firstChar = (firstChar = firstChar.toUpperCase())===""?"A":firstChar;

				// 显示短语和释义
				function add(sentences, index){
	
					$("#Phrase .sentence-container").append(
						"<li>" + sentences[index].spell + " " + sentences[index].explain + "</li>"
					)
					return index+1;
				}
	
				// 多次点击时，清除计时器
				let clock=null;
				$("#Phrase .sentence-container").html("");
				$("#Phrase").fadeIn();
				clearInterval(clock);
				
				// 请求短语库
				$.get("http://localhost:5217/?business=getPhrase&firstChar="+firstChar, function(data){
	
					$(window.View.prototype.getDomLocationText("phrase-get-button")).text("获取成功");
					setTimeout(function(){
						$(window.View.prototype.getDomLocationText("phrase-get-button")).text("获取短语库");
					},1000);

					let sentences = JSON.parse(data).data.sentences;
					if(sentences.length<1){

						$("#Phrase .sentence-container").html("<div style='text-align:center;margin:20px 0;color: #888;'>当前"+firstChar[0]+"-短语库为空"+"</div>");
						return;
					}
	
					let index = add(sentences, 0);
					clock = setInterval(function(){
						
						if(index>sentences.length-1){
	
							clearInterval(clock); // 清除计时器
							return;
						}
	
						index = add(sentences, index);
					},1000);
				});
			},

			// 添加短语
			addPhrase: function(sentence){

				$.ajax({

                    type:  "get" ,
                    url:   "http://localhost:5217/?business=addPhrase&spell="+sentence.spell+"&explain="+sentence.explain,
                    async: true,
                    success:function(data){

                        data = JSON.parse(data);
						if(data.code!=0){

							alert("添加失败了！");
							return;
						}

						$(window.View.prototype.getDomLocationText("phrase-add-button")).text("添加成功");
                    },
                    error:function( e ){

                        alert(e);
                    },
                    complete:function(){

						$(window.View.prototype.getDomLocationText("phrase-word-input")).val("");
						setTimeout(function(){
							$(window.View.prototype.getDomLocationText("phrase-add-button")).text("添加");
						},1000);
                    }
                });
			},

			// 删除短语
			deletePhrase: function(firstChar, id){

				$.ajax({

                    type:  "get" ,
                    url:   "http://localhost:5217/?business=deletePhrase&firstChar="+firstChar+"&id="+id,
                    async: true,
                    success:function(data){

                        data = JSON.parse(data);
						if(data.code!=0){

							alert("删除失败了！");
							return;
						}

						$(window.View.prototype.getDomLocationText("phrase-delete-button")).text("删除成功");
                    },
                    error:function( e ){

                        alert(e);
                    },
                    complete:function(){

						setTimeout(function(){
							$(window.View.prototype.getDomLocationText("phrase-delete-button")).text("删除");
						},1000);
                    }
                });
			}
		}
	},

	// 获取DOM的定位
	getDomLocationText: function(className){

		switch(className){

			case 'word-input': return "#Body .view-for-option #WordCloud .shoe input.word-input";
			case "get-button" : return "#Body .view-for-option #WordCloud .shoe button.get-button";
			case "add-button" : return "#Body .view-for-option #WordCloud .shoe button.add-button";
			case "delete-button" : return "#Body .view-for-option #WordCloud .shoe button.delete-button";

			case 'phrase-word-input': return "#Body .view-for-option #Phrase .shoe input.word-input";
			case "phrase-get-button" : return "#Body .view-for-option #Phrase .shoe button.get-button";
			case "phrase-add-button" : return "#Body .view-for-option #Phrase .shoe button.add-button";
			case "phrase-delete-button" : return "#Body .view-for-option #Phrase .shoe button.delete-button";

			default:break;
		}

		return "";
	}

};

	
})();