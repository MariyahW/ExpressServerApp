const express = require('express');
const Router = express.Router();

const pay = require('../data/pay');
const department= require('../data/department');
const base = require('../data/base');



// todo: Runs fine but get error Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client in console -- No header is being changed
Router.route('/')
.get((req,res)=>{
    let gender = JSON.stringify(req.query['gender']);
    let salary = JSON.stringify(req.query['salary']);
    console.log(salary);
    const arr= [];
    if(gender){
        gender=gender.toLocaleUpperCase();
            pay.forEach(salary=>{
                      if(JSON.stringify(salary[11])==gender){
                    arr.push(salary);
                }
            })
            res.json(arr);
        }
        if(salary){
            pay.forEach(salary=>{
              
              arr.push(salary[12]);
            //   arr.sort((a,b)=>(a-b)); This line works but has been commented out for speed of loading
          
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