const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "backenduser",
  password: "Backend@123",
  database: "myapp",
});

db.connect((err) => {
  if (err) {
    console.log("Database Error:", err);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;