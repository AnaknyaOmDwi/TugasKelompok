const express = require('express');
const router = express.Router();

router.get('/cart',(req,res)=>{
    res.sendFile(__dirname+'/public/cart.html')
})

router.get('/checkout',(req,res)=>{
    res.sendFile(__dirname+'/public/checkout.html')
})

module.exports = router;