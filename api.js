const express = require('express');
const router = express.Router();
const db = require(__dirname + '/conn');

// Menampilkan Semua Data Products
router.get('/api/products',(req,res)=>{
    const sql = `SELECT a.id, a.product_name, a.product_photo, a.product_price, a.desc, a.quantiti, a.check_product, a.shop_id, b.shop_name, b.shop_photo, b.check_toko FROM products a JOIN shop b ;`
    db.query(sql,(err,results)=>{
        if(err){
            console.error("Query Error : ", err)
            res.status(500).json({"status " : 500, "error": true, "massage": "Query error"})
        }
        res.status(200).json({ "status": 200, "error": false, "data": results });
    })
    
})

//Mengedit data check product (true/false)
router.put('/products',(req,res)=>{
    res.json('walawewsadasd')
})

// Menghapus Data products berdasarkan check product (ture/false)
router.delete('/products', (req, res) => {
    const id = req.params.id;

    const query = `INSERT INTO deletehistory (id, product_name, product_photo, product_price, description, shop_id, check_product, quantity) SELECT id, product_name, product_photo, product_price, description, shop_id, 0 AS check_product, quantity FROM products WHERE check_product = 1; DELETE FROM products WHERE check_product = 1;`

    db.query(query, [id, id], (err, results) => {
        if (err) {
            console.error("Query Error: ", err);
            return res.status(500).json({ "status": 500, "error": true, "message": "Query error" });
        }
        res.status(200).json({ "status": 200, "error": false, "message": `Product ${id} Deleted Succsess` });
    });
});

//Menghapus semua yang berada di history
router.delete('/history', (req, res) => {
    const id = req.params.id;

    const query = `INSERT INTO products (id, product_name, product_photo, product_price, description, shop_id, check_product, quantity) SELECT id, product_name, product_photo, product_price, description, shop_id, check_product, quantity FROM deletehistory; DELETE FROM deletehistory;`

    db.query(query, [id, id], (err, results) => {
        if (err) {
            console.error("Query Error: ", err);
            return res.status(500).json({ "status": 500, "error": true, "message": "Query error" });
        }
        res.status(200).json({ "status": 200, "error": false, "message": "History Deleted Succsess" });
    });
});


module.exports = router;