const puppeteer = require('puppeteer');
const index = require('../index');

exports.postApi = (req,res,next) => {
  const title = req.body.title;
index.getScape(title).then((data) => {
  console.log(data);
  res.status(201).json({
    title:data,
  });
}).catch(err => console.log(err));
}

exports.getApi = (req,res,next) => {
  index.getScape().then((data) => {
    console.log(data);
    res.status(200).json({data:data});
  });
}


