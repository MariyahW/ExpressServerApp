const express = require('express');
const Router = express.Router();

const base = require('../data/base');

Router
  .route("/")
  .get((req, res) => {
res.json(base);
})

//get base pays greater than entered base
Router.route("/:base")
.get((req,res)=>{
    const amount = req.params.base;
    const arr=[];
    const pay = base.cachedContents.top;
    pay.forEach(salary=>{
        if(amount<Number(salary.item)){
            arr.push(salary);
        }
    })
    
    res.json(arr);
})
module.exports= Router;