const http = require("http");
const path = require("path");
const YAML = require('js-yaml'); // npm install js-yaml : 不要全局安装
const fs = require("fs");
const app = require("../config/app.js");
const url = require("url");
const querystring = require("querystring");


require(app.APP_PATH + "./extPrototypes/extPrototypes.js"); // 不是为了获取路径时, 不用 path.join()


module.exports = {

    // 获取短语
    getPhrase: function(request, response){

		// 获取首字母
        let ch = url.parse(request.url,true).query.firstChar; 
        ch = (typeof ch === 'undefined' || ch.trim() === '')?'A':ch.trim();
        
        // 文件的路径
        let file = path.join(app.APP_PATH, "/database/yaml/phrase/"+ ch[0].toUpperCase() +".yaml");
		
		// 获取yaml内容
		let yamlText = fs.readFileSync( file, {"flag":"a+"} ).toString();
        
        // 将 yaml 内容转成 JS 对象
        let data = YAML.safeLoad(yamlText);data = (typeof data != "object")?{}:data;
        if(!( "sentences" in data ) || ! Array.isArray( data['sentences'] ) ){

            data["sentences"]=[];
        }

        // 将 yaml 内容转成 JS 对象
        return data;
    },
    
    // 添加短语
    addPhrase: function(request, response){

        let query = url.parse(request.url,true).query, spell, explain;
        
        // 没有传递spell参数
        try{

            spell = query.spell;
            explain = query.explain;
            if(spell.length<1 || explain.length<1){

                throw new Error();
            }
            
        }catch(e){

            throw new Error("缺少spell/explain参数或者其值不能为空");
        }

        // 获取短语首字母并计算出此短语应该所在库的文件的路径
        let file = path.join(app.APP_PATH, "/database/yaml/phrase/"+ spell[0].toUpperCase() +".yaml");
        
        // 获取短语库内容
        let data=[], content = YAML.safeLoad(fs.readFileSync( file, {"flag":"a+"} ).toString());
        content = (typeof content === 'undefined')?{}:content;
        let sentences = (!("sentences" in content) || ! Array.isArray( content['sentences'] ))?[]:content.sentences;
        
        // 循环短语库，删除重复，添加新短语
        let id=2;
        data.push({ "id":1, "spell":spell, "explain":explain });
        sentences.forEach((sentence, index)=>{
            if(sentence.spell !== spell){

                data.push({ "id": id, "spell":sentence.spell, "explain":sentence.explain });
                ++id;
            }
        });
        data = {"sentences": data};

        // 再次写入
        fs.writeFileSync( file, YAML.safeDump(data) );

        // 返回新加的短语对象
        return { "spell":spell, "explain":explain };
    },

    // 删除短语
    deletePhrase: function(request, response){

        let query = url.parse(request.url,true).query, firstChar, id;
        
        // 没有传递spell参数
        try{

            firstChar = query.firstChar.toUpperCase();
            id = parseInt( query.id );
            if(firstChar.length<1 || id<1){

                throw new Error();
            }
            
        }catch(e){

            throw new Error("缺少firstChar/id参数或其值不正确");
        }

        // 获取短语首字母并计算出此短语应该所在库的文件的路径
        let file = path.join(app.APP_PATH, "/database/yaml/phrase/"+ firstChar +".yaml");
        
        // 获取短语库内容
        let data=[], content = YAML.safeLoad(fs.readFileSync( file, {"flag":"a+"} ).toString());
        content = (typeof content === 'undefined')?{}:content;
        let sentences = (!("sentences" in content) || ! Array.isArray( content['sentences'] ))?[]:content.sentences;

        // 循环短语库，删除重复
        index = 1;
        sentences.forEach((sentence)=>{
            if(parseInt(sentence.id) !== id){

                data.push({ "id":index, "spell":sentence.spell, "explain":sentence.explain });
                ++index;
            }
        });data = {"sentences": data};

        // 再次写入
        fs.writeFileSync( file, YAML.safeDump(data) );

        // 返回删除的短语的首字母和id
        return { "firstChar":firstChar, "id":id};
    }

};


