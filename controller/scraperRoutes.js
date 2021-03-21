
const Sequence = require('../models/sequences');
const puppeteer = require('puppeteer');
const index = require('../index');
exports.postApi = async (req,res,next) => {
  console.log("Post Request Entered")
  const title = req.body.title;

const results = await Sequence.find({title:new RegExp(title,'i')});
console.log(results)
res.status(201).json({results});

}

exports.getApi = async (req,res,next) => {
 const value =  await Sequence.find({})
 console.log(value)
}


