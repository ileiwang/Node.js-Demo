const net = require('net');
console.log(net.isIPv4('192.168.1.1'));
console.log(net.isIPv6('192.168.1.1'));
console.log(net.isIP('192.168.1.1'));
console.log(net.isIP('192.168.1'));

const server = net.createServer((c) => {
  // 'connection' listener
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.write('hello\r\n');
  c.pipe(c);
});


server.on('error', (err) => {
  throw err;
});


server.listen(8124, () => {
  console.log('server bound');
});