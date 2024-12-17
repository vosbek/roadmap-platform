const oracledb = require('oracledb');

async function initialize() {
  try {
    await oracledb.createPool({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECTSTRING,
      poolMin: 1,
      poolMax: 5,
      poolIncrement: 1
    });
    console.log('Connection pool created');
  } catch (err) {
    console.error('Error creating connection pool:', err);
    throw err;
  }
}

async function closePool() {
  try {
    await oracledb.getPool().close();
    console.log('Pool closed');
  } catch (err) {
    console.error('Error closing pool:', err);
    throw err;
  }
}

async function execute(sql, binds = [], opts = {}) {
  let connection;
  try {
    connection = await oracledb.getPool().getConnection();
    const result = await connection.execute(sql, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
      ...opts
    });
    return result;
  } catch (err) {
    console.error('Error executing query:', err);
    throw err;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
}

module.exports = {
  initialize,
  closePool,
  execute
};