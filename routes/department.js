const express = require('express');
const Router = express.Router();

const department = require('../data/department');


Router.route('/')
.get((req,res)=>{
    res.json(department);
})
Router.route('/:employee')
.get((req,res)=>{
    let arr =[];
    let emp=req.params.employee;
    department.cachedContents.data.forEach(dept=>{
        if(Number(dept.count)>Number(emp)){
            arr.push(dept);
        }
    })
    arr.push(department.cachedContents.data[0]);

res.json(arr);
})






module.exports= Router;