const http = require("http");
const app = require("../config/app.js");
const url = require("url");


const business = require(app.APP_PATH + "./services/business.js");
const response = require(app.APP_PATH + "./response/response.js");

http.createServer(function(req, res){

	// 响应设置
	let code=0, data, msg="成功";
	try{

		// 获取 businessName
		let query = url.parse(req.url,true).query, businessName="";
		if("business" in query ){
			businessName=query.business;
		}

		// 根据 business 获取业务数据
		switch( businessName ){

			case "getVocabulary": data = business.getVocabulary(req, res);break;
			case "addWord": data = business.addWord(req, res);break;
			case "deleteWord": data = business.deleteWord(req, res);break;

			
			case "getPhrase": data = business.getPhrase(req, res);break;
			case "addPhrase": data = business.addPhrase(req, res);break;
			case "deletePhrase": data = business.deletePhrase(req, res);break;
			
			// 返回资源
			default: response.resources(req, res);return;

		}
	}catch(e){

		code = -1;
		data = [];
		msg = e.message;
	}

	// 响应
	res.writeHead(200, {"Content-Type":"text/plain;charset=utf-8"});
	res.end( JSON.stringify({"code":code, "data":data, "msg":msg}) );

}).listen(5217);

