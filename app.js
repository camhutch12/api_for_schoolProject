const express = require('express');
const bodyParser = require('body-parser');
const scrapeRoutes = require('./routes/scaperRoutes');
const app = express();
app.use(bodyParser.json()) // good for application/json 
app.use('/feed',scrapeRoutes);

app.listen(8080);