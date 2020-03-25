const { URL } = require('url');
const myURL = new URL('https://abc:xyz@example.com');
console.log(myURL.password);
  // 输出 xyz

myURL.password = '1%2%3';
console.log(myURL.href);
  // 输出 https://abc:123@example.com