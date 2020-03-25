var mysql = require('mysql');

var connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'wanglei',
        database: 'test',
        port: '3306',
    }
);


connection.connect();



var sql = 'SELECT * FROM websites';

// connection.query(sql, function (err, result, fields) {

//     if (err) {
//         console.log('[SELECT ERROR] - ', err.message);
//         return;
//     }
//     console.log('--------------------------SELECT----------------------------');
//     console.log(result[0].url);
//     console.log('------------------------------------------------------------\n\n');
// });



var addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
var addSqlParams = ['ileiwang', 'www.ileiwang.cc', '10086', 'CN'];

// connection.query(addSql, addSqlParams, function (err, result) {

//     if (err) {
//         console.log('[INSERT ERROR] - ', err.message);
//         return;
//     }

//     console.log('--------------------------INSERT----------------------------');
//     //console.log('INSERT ID:',result.insertId);        
//     console.log('INSERT ID:',result);        
//     console.log('-----------------------------------------------------------------\n\n');  
// });



var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com', 6];


// connection.query(modSql,modSqlParams,function (err, result) {
//     if(err){
//           console.log('[UPDATE ERROR] - ',err.message);
//           return;
//     }        
//    console.log('--------------------------UPDATE----------------------------');
//    console.log('UPDATE affectedRows',result.affectedRows);
//    console.log('-----------------------------------------------------------------\n\n');
//  });

var delSql = 'DELETE FROM websites where id=6';

connection.query(delSql, function (err, result) {
    if (err) {
        console.log('[DELETE ERROR] - ', err.message);
        return;
    }

    console.log('--------------------------DELETE----------------------------');
    console.log('DELETE affectedRows', result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});


connection.end();

