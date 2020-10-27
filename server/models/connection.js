const mysql = require('mysql2/promise');

const config = require('../config')[process.env.NODE_ENV || 'development'];

const pool = mysql.createPool({
  host: config.host,
  user: config.username,
  password: config.password,
  database: config.database,
});

const db = async (sql, params = []) => {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const [result] = await connection.query(sql, params);
      connection.release();
      return result;
    } catch (err) {
      console.log(err);
      connection.release();
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = db;
