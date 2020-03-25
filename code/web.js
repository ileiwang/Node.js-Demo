
//使用 Node 创建 Web 服务器
var http = require("http");

var fs = require("fs");
var url = require("url");

http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;
    console.log("请求："+pathname+" 已收到。");
    console.log(pathname.substr(1));

    fs.readFile(pathname.substr(1),function(err,data){
        if(err)
        {
            console.log(err);
            response.writeHead(404,{"Content-Type":"text/html"});
        }
        else{
            response.writeHead(200,{"Content-Type":"text/html"});
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8080);

console.log("服务器运行于：http://localhost:8080");




