var express = require('express');
var bodyParser = require("body-parser")
var app = express();
var admin = express(); // the sub app
// admin.get('/hello/:name', function(req, res) {
//     console.log(admin.mountpath); // /admin
//     console.log(req.params.name);

//     res.send('Admin Homepage');
// });



admin.get('/hello', function(req, res) {
    console.log(admin.mountpath); // /admin
    console.log(req.query.name);
    console.log(req.query.num);

    res.send('Admin Homepage');
});
app.use('/admin', admin); // mount the sub app


app.get('/', function(req, res) {
    res.send('hello world!');
});
app.locals.title = 'My App';
app.locals.email = 'me@myapp.com';

app.listen(3000);