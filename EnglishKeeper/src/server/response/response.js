const app = require("../config/app.js");
const fs = require("fs");
const path = require("path");
const url = require("url");

function getResourceContentType(resource){

    let extname = path.extname(resource);
    switch(extname){

        case ".css": return "text/css" ;
        case ".js" : return "application/javascript";
        
        case ".jpeg": return "image/jpeg	";
        case ".jpg": return "application/x-jpg";
        
        default: return "text/html;charset=utf-8";
    }
}



module.exports = {

    resources: function(req, res){

        // 获取客户端请求的资源
        let resource = url.parse(req.url,true).path; 
        let file = path.join(app.ROOT_PATH , (resource==="/")?"/index.html":resource);
        
        // 获取资源并输出
        fs.readFile(file, "utf-8", function(err,data){

            if(err && resource !== "/favicon.ico") {
                throw new Error(err.message);
            }else{

                res.writeHead(200, {"Content-Type": getResourceContentType(file) });
                res.end(data);
            }	   
        });
    }
};
