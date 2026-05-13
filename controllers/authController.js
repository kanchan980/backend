const db = require("../config/db");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql =
    "INSERT INTO users (name,email,password) VALUES (?,?,?)";

  db.query(
    sql,
    [name, email, hashedPassword],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "User Registered",
      });
    }
  );
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email=?";

  db.query(sql, [email], async (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    const user = result[0];

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      message: "Login Success",
      token,
      user,
    });
  });
};