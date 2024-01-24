const express = require('express');
const Router = express.Router();

const department = require('../data/department');


Router.route('/')
.get((req,res)=>{
    res.json(department);
})






module.exports= Router;