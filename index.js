const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors")
const port = process.env.PORT || 5000;
const authMiddleware = require('./middlewares/Auth')

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            autoIndex: true
        });
        console.log("Database connected ...");
    } catch (error) {
        throw error;
    }
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(authMiddleware)
app.use('/product', require('./routes/productRoute'))

app.use(function(err, req,res,next) {
    if (err) {
        console.log('ERROR: ', err)
        res.status(500)
        res.end()
        return
    }
    next()
})

app.listen(port, ()=>{
    connect();
    console.log('Server Connected ...');
})
