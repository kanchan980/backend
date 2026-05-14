const db = require("../config/db");

exports.createUser = (req, res) => {

  const { name, email, password } =
    req.body;

  const sql =
    "INSERT INTO users (name,email,password) VALUES (?,?,?)";

  db.query(
    sql,
    [name, email, password],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message:
          "User Created Successfully",
      });

    }
  );
};

exports.getAllUsers = (req, res) => {

  const sql =
    "SELECT * FROM users";

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });
};

exports.getUsersPagination = (req, res) => {

  const page =
    parseInt(req.query.page) || 1;

  const limit =
    parseInt(req.query.limit) || 5;

  const offset =
    (page - 1) * limit;

  const sql =
    "SELECT * FROM users LIMIT ? OFFSET ?";

  db.query(
    sql,
    [limit, offset],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        page,
        limit,
        data: result,
      });

    }
  );
};

exports.getSingleUser = (req, res) => {

  const { id } = req.params;

  const sql =
    "SELECT * FROM users WHERE id=?";

  db.query(sql, [id], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result[0]);

  });
};

exports.deleteUser = (req, res) => {

  const { id } = req.params;

  const sql =
    "DELETE FROM users WHERE id=?";

  db.query(sql, [id], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message:
        "User Deleted Successfully",
    });

  });
};