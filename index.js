const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors")
const port = process.env.PORT || 5000;

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected ...");
    } catch (error) {
        throw error;
    }
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/product', require('./routes/productRoute'))

app.listen(port, ()=>{
    connect();
    console.log('Server Connected ...');
})
