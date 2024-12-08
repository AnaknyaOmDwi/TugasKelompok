const express = require('express');
const router = express.Router();

router.get('/cart',(req,res)=>{
    res.sendFile(__dirname+'/public/keranjang.html')
})

module.exports = router;