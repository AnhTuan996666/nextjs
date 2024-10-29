import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',  // Địa chỉ máy chủ MySQL
  user: process.env.DB_USER || 'root',// Tên người dùng MySQL
  password: process.env.DB_PASS || '', // Mật khẩu MySQL
  database: process.env.DB_NAME ||'vietispage', // Tên cơ sở dữ liệu
});

export default connection;