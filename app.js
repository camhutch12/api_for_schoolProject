

if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}

const express = require('express');
const BodyParser = require('body-parser');
const scrapeRoutes = require('./routes/scaperRoutes');
const mongoose = require('mongoose');
const Sequence = require('./models/sequences');
// app.use(BodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080
console.log(PORT);
const dbUrl = process.env.DB_URL;
console.log(dbUrl)
// mongodb://localhost:27017/scraper
mongoose.connect(dbUrl,{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true,useFindAndModify:false});
const db = mongoose.connection;
db.on("error",console.error.bind(console,"error"));

db.once('open', () =>{
    console.log("Database Opened")
});


const app = express();
app.use('/feed',scrapeRoutes);
app.use(BodyParser.json()) // good for application/json 
app.listen(PORT,() =>{
    console.log("Connection To Server OPened");
});