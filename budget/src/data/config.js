const mysql = require("mysql");

const config = {

    host: "localhost",
    user: "root",
    password: "x3cdgc6x",
    database: "budget"

};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;