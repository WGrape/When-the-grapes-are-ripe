(function(){

	var config;

	window.Robot = function(_config) {

		config = _config;

		config.domText = config.dom; // 给 config 对象新加一个 domText 属性, 用于存储DOM字符串

		config.dom = document.getElementById(config.dom); // 把DOM字符串转成真正的DOM
	};

	window.Robot.prototype = {

		constructor: Robot,
		
		props:{

			counter:{

				lines:0, // 记录行号
				words:0, // 记录词数
				lineWords:0 //每一行的词数
			}
		},

		// 写文字 ...
		write: function(code) {

			var dom = config.dom;
			var buffer = code.split("");
			var index = 0;

			// 当多个 setInterval() 并发时，文字的输出就会乱序
			// 所以，想办法只使用1个 setInterval()，不要使用多个
			var context = Robot.prototype.createParagraphDOM(index);
			var clock = setInterval(function(){

				if(index>buffer.length-1){
					
					clearInterval(clock);

					// 插入落款
					Robot.prototype.insertInscribeDOM();
					return;
				}

				if(buffer[index]=='\n' || (Robot.prototype.props.counter.lineWords!=0&&Robot.prototype.props.counter.lineWords%46==0) ){

					context = Robot.prototype.createParagraphDOM(index);
					Robot.prototype.props.counter.lineWords=0; // 每一行的词数恢复为0

					// 说明此时第2个条件满足了
					if(buffer[index]!='\n'){

						Robot.prototype.putChar(context,buffer,index);
					}

				}else{

					Robot.prototype.putChar(context,buffer,index);
				}

				++index;

			},config.speed);
			
		},

		putChar(context,buffer,index){

			Robot.prototype.adjustView();

			if(! /^\s+$/.test(buffer[index]) ){

				Robot.prototype.record("word"); // 空白不计数
				++Robot.prototype.props.counter.lineWords;
				context.innerText += buffer[index];
			}
		},


		record(type){

			if(type=='word'){

				++this.props.counter.words;
			}else if(type=='line'){

				++this.props.counter.lines;
			}

			$("#Counter_words").text(this.props.counter.words);
			$("#Counter_lines").text(this.props.counter.lines);
		},
		
		adjustView(){

			$("html, body").stop().animate({scrollTop:$(document).height()}, 1500, 'swing', function(){});
		},

		// 创建段落 DOM
		createParagraphDOM(index){

			// 换行都计入，换几次行就计入几次
			this.record("line");

			// 如果不是第一行，就移除上一行的 writting class
			if(this.props.counter.lines>1){

				$("#Letter .p").eq(this.props.counter.lines-2).removeClass("writting");
			}	

			var odd = (this.props.counter.lines%2==0)?'':'odd';

			var $p = $("<p id='P" + index +"' class='p "+ odd +" writting' ></p>");
			
			$("#"+config.domText).append($p);

			return $p[0];
		},

		// 插入落款 DOM
		insertInscribeDOM(){

			// 最后一行也移除掉 writting class
			$("#Letter .p").eq(this.props.counter.lines-1).removeClass("writting");

			var fromDOM = "<p style='margin-bottom:7px;'><span style='font-weight:bold;font-size:18px;'>From</span> : "+ config.from +"</p>";
			var dateDOM = "<p style='margin-bottom:7px;'><span style='font-weight:bold;font-size:18px;'>Date</span> : "+ config.date +"</p>";
			var makeDOM = "<p style='text-align:left;'><a><img src='./images/github.png' style='width:45px;vertical-align: text-bottom;' href='https://github.com/Lvsi-China'></a><span>By</span> : <a href='https://github.com/Lvsi-China'>Lvsi-China</a>  </p>";
			var $p = $("<div id='Inscribe'></div>").append(dateDOM,fromDOM,makeDOM);
			
			$("#"+config.domText).append($p);
		}


	}



})();

