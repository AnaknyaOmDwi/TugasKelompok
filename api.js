const express = require("express");
const router = express.Router();
const db = require(__dirname + "/conn");
const cors = require("cors");
router.use(cors());

// Menampilkan Semua Data Products
router.get("/api/products", (req, res) => {
  const sql = `SELECT a.id, a.product_name, a.product_photo, a.product_price, a.description, a.quantity, a.check_product, a.shop_id, b.shop_name, b.shop_photo, b.check_toko FROM products a JOIN shop b ON a.shop_id = b.id;`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Query Error : ", err);
      res
        .status(500)
        .json({ "status ": 500, error: true, massage: "Query error" });
    }
    res.status(200).json({ status: 200, error: false, data: results });
  });
});

//Mengedit data check product (true/false)
router.put("/trproducts/:id", (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE products SET check_product = '1' WHERE products.id = ?`;

  db.query(sql, id, (err, results) => {
    if (err) {
      console.error("Query Error: ", err);
      return res
        .status(500)
        .json({ status: 500, error: true, message: "Query error" });
    }
    res
      .status(200)
      .json({
        status: 200,
        error: false,
        message: `Product ${id} Edit Succsess`,
      });
  });
});

router.put("/flproducts/:id", (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE products SET check_product = '0' WHERE products.id = ?`;

  db.query(sql, id, (err, results) => {
    if (err) {
      console.error("Query Error: ", err);
      return res
        .status(500)
        .json({ status: 500, error: true, message: "Query error" });
    }
    res
      .status(200)
      .json({
        status: 200,
        error: false,
        message: `Product ${id} Edit Succsess`,
      });
  });
});

// Menghapus Data products berdasarkan check product (ture/false)
router.delete("/products", (req, res) => {
  const sql = `INSERT INTO deletehistory (id, product_name, product_photo, product_price, description, shop_id, check_product, quantity) SELECT id, product_name, product_photo, product_price, description, shop_id, 0 AS check_product, quantity FROM products WHERE check_product = 1; DELETE FROM products WHERE check_product = 1;`;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Query Error: ", err);
      return res
        .status(500)
        .json({ status: 500, error: true, message: "Query error" });
    }
    res
      .status(200)
      .json({ status: 200, error: false, message: `Product Deleted Succsess` });
  });
});

//Menghapus semua yang berada di history
router.delete("/history", (req, res) => {
  const sql = `INSERT INTO products (id, product_name, product_photo, product_price, description, shop_id, check_product, quantity) SELECT id, product_name, product_photo, product_price, description, shop_id, check_product, quantity FROM deletehistory; DELETE FROM deletehistory;`;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Query Error: ", err);
      return res
        .status(500)
        .json({ status: 500, error: true, message: "Query error" });
    }
    res
      .status(200)
      .json({ status: 200, error: false, message: "History Deleted Succsess" });
  });
});

module.exports = router;
