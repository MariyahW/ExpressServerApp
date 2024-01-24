const express = require('express');
const app = express();

const port= 8080;

const base = require('./routes/base');
const pay = require('./routes/pay');
const department = require('./routes/department');
const error= require('./util/error');

app.use('/base',base);
app.use('/pay',pay);
app.use('/department',department);

// app.get('/', (req, res)=>{
// //here do the render?

// })


app.listen(port, ()=> console.log(`Server on port: ${port}`));


