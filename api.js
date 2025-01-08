const express = require("express");
const router = express.Router();
const db = require(__dirname + "/conn");
const fs = require('fs'); 
const cors = require("cors");
router.use(cors());

// Menampilkan Semua Data Products
router.get('/products',(req,res)=>{
    const sql = `SELECT a.id, a.product_name, a.product_photo, a.product_price, a.description, a.quantity, a.check_product, a.shop_id, b.shop_name, b.shop_photo, b.check_toko FROM products a JOIN shop b ON a.shop_id = b.id`
    db.query(sql,(err,results)=>{
        if(err){
            console.error("Query Error : ", err)
            res.status(500).json({"status " : 500, "error": true, "massage": "Query error"})
        }
        res.status(200).json({ "status": 200, "error": false, "data": results });
    })
    
})


// Menampilkan Semua Data Toko
router.get("/toko", (req, res) => {
  const sql = `SELECT * FROM shop`;
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
router.put("/products/:id", (req, res) => {
  const id = req.params.id; // ID produk yang ingin diperbarui
  const { check_product } = req.body; // Nilai check_product dari request body

  // Validasi input untuk memastikan nilai check_product hanya 0 atau 1
  if (check_product !== 0 && check_product !== 1) {
    return res.status(400).json({
      status: 400,
      error: true,
      message: "Invalid value for check_product. Must be 0 or 1.",
    });
  }

  const sql = `UPDATE products SET check_product = ? WHERE id = ?`;

  db.query(sql, [check_product, id], (err, results) => {
    if (err) {
      console.error("Query Error: ", err);
      return res.status(500).json({
        status: 500,
        error: true,
        message: "Query error",
      });
    }

    // Jika tidak ada baris yang diperbarui, artinya ID tidak ditemukan
    if (results.affectedRows === 0) {
      return res.status(404).json({
        status: 404,
        error: true,
        message: `Product with ID ${id} not found`,
      });
    }

    // Respon sukses
    res.status(200).json({
      status: 200,
      error: false,
      message: `Product ${id} updated successfully`,
    });
  });
});

//Mengedit data check product (true/false)
router.put("/shop/:id", (req, res) => {
  const id = req.params.id; // ID produk yang ingin diperbarui
  const { check_toko } = req.body; // Nilai check_toko dari request body

  // Validasi input untuk memastikan nilai check_toko hanya 0 atau 1
  if (check_toko !== 0 && check_toko !== 1) {
    return res.status(400).json({
      status: 400,
      error: true,
      message: "Invalid value for check_toko. Must be 0 or 1.",
    });
  }

  const sql = `UPDATE shop SET check_toko = ? WHERE id = ?`;

  db.query(sql, [check_toko, id], (err, results) => {
    if (err) {
      console.error("Query Error: ", err);
      return res.status(500).json({
        status: 500,
        error: true,
        message: "Query error",
      });
    }

    // Jika tidak ada baris yang diperbarui, artinya ID tidak ditemukan
    if (results.affectedRows === 0) {
      return res.status(404).json({
        status: 404,
        error: true,
        message: `Product with ID ${id} not found`,
      });
    }

    // Respon sukses
    res.status(200).json({
      status: 200,
      error: false,
      message: `Shop ${id} updated successfully`,
    });
  });
});

//Relod Database
router.post('/relodall',(req,res)=>{
  // Drop dan Create Database baru
  const databasepath = './dataSQL/antobengkel.sql'
  const databasesql = fs.readFileSync(databasepath, 'utf8');
  const sqldropdb = `DROP DATABASE antobengkel; CREATE DATABASE antobengkel; USE antobengkel; ${databasesql}`
  db.query(sqldropdb,(err)=>{
    if (err){
      console.error('Gagal drop, create dan import Database : ',err)
      return res.status(500).json({error:'Gagal membuat ulang database'})
    }

    res.status(200).json({
      status: 200,
      error: false,
      message: `Database Berhasil relod`,
    });
  })
})


// Menghapus Data products berdasarkan check product (ture/false)
router.delete("/products", (req, res) => {
  const sql = `DELETE FROM products WHERE check_product = 1; DELETE FROM shop WHERE check_toko = 1;`;

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

//Relod DataBase
router.post('/')

module.exports = router;
