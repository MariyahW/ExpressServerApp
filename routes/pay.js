const express = require('express');
const Router = express.Router();

const pay = require('../data/pay');




Router.route('/')
.get((req,res)=>{
    res.json(pay);
})


module.exports= Router;