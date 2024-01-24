const express = require('express');
const Router = express.Router();

const pay = require('../data/pay');
const department= require('../data/department');
const base = require('../data/base');



// todo: Runs fine but get error Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client in console -- No header is being changed
Router.route('/')
.get((req,res)=>{
    const gender = JSON.stringify(req.query['gender']).toLocaleUpperCase();
    console.log(gender);
    const arr= [];
    if(gender){
            pay.forEach(salary=>{
                      if(JSON.stringify(salary[11])==gender){
                    arr.push(salary);
                }
            })
            res.json(arr);
        }
        
    
    res.json(pay);
})

Router.route('/:dept')
.get((req,res)=>{
    const dept = JSON.stringify(req.params.dept).toLocaleUpperCase();
    const list = department.cachedContents.data;
    let isThere= false;
    let arr=[];
    if(dept){
        list.forEach(area=>{
            if(dept==JSON.stringify(area.item)){
                isThere=true;
            }
        })
    }
    if(isThere){
        pay.forEach(salary=>{
                  if(JSON.stringify(salary[8]).includes(dept)){
                arr.push(salary);
            }
        })
    }
    res.json(arr);
})

module.exports= Router;