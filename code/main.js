console.time("Time");
console.log( __filename );
console.log( __dirname );

function printHello(){
    console.log( "Hello, World!");
   
 }

// 两秒后执行以上函数
var t = setTimeout(printHello, 2000);

// 清除定时器
//clearTimeout(t);

var tt = setInterval(printHello, 2000);

clearInterval(tt);

console.error("Error!");

console.info("Info!");

console.warn("Warn!");

console.dir(tt);

console.timeEnd("Time");

console.assert(1+1==3,"错误");

console.log('byvoid%diovyb'); 

console.log('byvoid%diovyb', 1991);

console.trace();

process.on('exit', function(code) {

    // 以下代码永远不会执行
    setTimeout(function() {
      console.log("该代码不会执行");
    }, 0);
    
    console.log('退出码为:', code);
  });
  console.log("程序执行结束");
  console.log(process.env);
  console.log(process.version);
  console.log(process.versions);
  console.log(process.exitCode);
  console.log(process.execArgv);
  console.log(process.argv);
  console.log(process.execPath);
  console.log(process.arch);
  console.log(process.pid);
  console.log(process.title);
  console.log(process.config);
  console.log(process.platform);
  process.stdout.write("World!" + "\n");


  process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
 });

 console.log('当前目录: ' + process.cwd());
 console.log(process.memoryUsage());
 console.log(process.uptime());
 console.log(process.hrtime());
 console.log(process.umask());


  
  