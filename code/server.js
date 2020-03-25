//服务器代码示例
// var http = require("http");
// http.createServer(function (request,response)
// {
//     response.writeHead(200,{'Content-Type':'text/plain'});
//     response.end("Hello,World");
// }).listen(8888);
// console.log('Server running at http://127.0.0.1:8888/');


//阻塞代码示例

// var fs = require("fs");
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("程序执行结束");

//非阻塞代码示例

// var fs = require("fs");
// fs.readFile('input.txt',function(err,data)
// {
//     if(err)
//         return console.error(err);
//     console.log(data.toString());
// });
// console.log("程序执行结束");

var http =  require("http");
var url = require("url");

function start(route)
{
    function onRequest(request,response)
    {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for "+pathname+" received");

        route(pathname);


        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hello,World");
        response.end();
    }
    
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;