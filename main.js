const express = require('express');
const router = express.Router();
const publicPath = path.join(process.cwd(), 'public');

router.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/cart.html')
})

router.get('/checkout',(req,res)=>{
    res.sendFile(__dirname+'/public/checkout.html')
})


module.exports = router;
