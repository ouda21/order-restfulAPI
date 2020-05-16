const mongoose = require('mongoose');

const productShema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    prince:Number
})

module.exports = mongoose.model('Product',productShema);