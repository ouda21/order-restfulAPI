const mongoose = require('mongoose');

if(mongoose.connect('mongodb+srv://lethal:'+process.env.DB_PASSWORD+'@cluster0-jeihw.mongodb.net/test?retryWrites=true&w=majority',{useUnifiedTopology: true,useNewUrlParser: true,})){
    console.log('Connected to the database');
}
else{
    console.log("Failed to connect");
}
module.exports = mongoose;