const zlib = require('zlib');
const http = require('http');
const fs = require('fs');

http.createServer((request,response)=>{
	const raw = fs.createReadStream('index.html');
	

})