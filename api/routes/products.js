const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Product = require('../models/product');
const checkAuth = require('../middleware/check-auth');
router.get('/',(req, res, next)=>{
    res.status(200).json({
        message:"Handling GET response"
    });
});

router.post('/',checkAuth,(req,res,next)=>{
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price
    });
    product.save().then(result=>{
        console.log(result);
    })
    .catch(err=>console.log(err));
    res.status(200).json({
        message:"Handling POST requests",
        createProduct: product
    });
});

router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    Product.findById(id)
    .exec()
    .then(doc=>{
        console.log("From database",doc);
        res.status(200).json(doc);
    })
    .catch(err=>{console.log(err)
        res.status(500).json();
    });
});

router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:"Product updated successfully"
    });
});

router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({
        messgae: "Product deleted successfully"
    })
})
module.exports = router;