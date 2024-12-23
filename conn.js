const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'antobengkel',
    multipleStatements: true
});

db.connect((err) => {
    if (err) {
        console.error('Koneksi kedalam database gagal', err.message);
    } else {
        console.log('Koneksi kedalam database berhasil');
    }   
});

module.exports = db;