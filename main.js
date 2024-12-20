const express = require('express');
const router = express.Router();

router.get('/cart',(req,res)=>{
    res.sendFile(__dirname+'/public/cart.html')
})

module.exports = router;