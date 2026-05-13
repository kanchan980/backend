const db = require("../config/db");

exports.getProducts = (req, res) => {
  const sql = "SELECT * FROM products";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;

  const { name, price, image } = req.body;

  const sql =
    "UPDATE products SET name=?, price=?, image=? WHERE id=?";

  db.query(
    sql,
    [name, price, image, id],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Product Updated Successfully",
      });
    }
  );
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;

  const sql =
    "DELETE FROM products WHERE id=?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Product Deleted Successfully",
    });
  });
};