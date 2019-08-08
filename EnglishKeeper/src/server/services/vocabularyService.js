const http = require("http");
const path = require("path");
const YAML = require('js-yaml'); // npm install js-yaml : 不要全局安装
const fs = require("fs");
const app = require("../config/app.js");
const url = require("url");
const querystring = require("querystring");


require(app.APP_PATH + "./extPrototypes/extPrototypes.js"); // 不是为了获取路径时, 不用 path.join()


module.exports = {

    // 获取词汇
    getVocabulary: function(request, response){

		// 获取首字母
        let ch = url.parse(request.url,true).query.firstChar; 
        ch = (typeof ch === 'undefined' || ch.trim() === '')?'A':ch.trim();
        
        // 文件的路径
        let file = path.join(app.APP_PATH, "/database/yaml/vocabulary/"+ ch.toUpperCase() +".yaml");
		
		// 获取yaml内容
		let yamlText = fs.readFileSync( file, {"flag":"a+"} ).toString();
        
        // 将 yaml 内容转成 JS 对象
        let data = YAML.safeLoad(yamlText);data = (typeof data != "object")?{}:data;
        if( !( "words" in data ) || ! Array.isArray( data['words'] ) ){

            data["words"]=[];
        }

        // 将 yaml 内容转成 JS 对象
        return data;
    },
    
    // 添加单词
    addWord: function(request, response){

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

        // 获取单词首字母并计算出此单词应该所在库的文件的路径
        let file = path.join(app.APP_PATH, "/database/yaml/vocabulary/"+ spell[0].toUpperCase() +".yaml");
        
        // 获取单词库内容
        let data=[], content = YAML.safeLoad(fs.readFileSync( file, {"flag":"a+"} ).toString());
        content = (typeof content === 'undefined')?{}:content;
        let words = (!("words" in content))?[]:content.words;
        
        // 循环单词库，删除重复，添加新单词
        data.push({ "spell":spell, "explain":explain });
        words.forEach((word, index)=>{
            if(word.spell !== spell){

                data.push({ "spell":word.spell, "explain":word.explain });
            }
        });
        data = {"words": data};

        // 再次写入
        fs.writeFileSync( file, YAML.safeDump(data) );

        // 返回新加的单词对象
        return { "spell":spell, "explain":explain };
    },

    // 删除单词
    deleteWord: function(request, response){

        let query = url.parse(request.url,true).query, spell;
        
        // 没有传递spell参数
        try{

            spell = query.spell;
            if(spell.length<1){

                throw new Error();
            }
            
        }catch(e){

            throw new Error("缺少spell参数或者其值不能为空");
        }

        // 获取单词首字母并计算出此单词应该所在库的文件的路径
        let file = path.join(app.APP_PATH, "/database/yaml/vocabulary/"+ spell[0].toUpperCase() +".yaml");
        
        // 获取单词库内容
        let data=[], content = YAML.safeLoad(fs.readFileSync( file, {"flag":"a+"} ).toString());
        content = (typeof content === 'undefined')?{}:content;
        let words = (!("words" in content))?[]:content.words;
        
        // 循环单词库，删除重复
        words.forEach((word, index)=>{
            if(word.spell !== spell){

                data.push({ "spell":word.spell, "explain":word.explain });
            }
        });data = {"words": data};

        // 再次写入
        fs.writeFileSync( file, YAML.safeDump(data) );

        // 返回删除的单词
        return { "spell":spell};
    }

};


