//使用 Node 创建 Web 客户端
var http = require('http');

// 用于请求的选项
var options = {
    host:'localhost',
    port:'8080',
    path:'/index.html'
};

var callback = function(response){

    var body = '';

    response.on('data',function(data){

        body+=data;
    });
    response.on('end',function()
    {
        console.log(body);
    });
}

var req = http.request(options,callback);
req.end();