const express = require('express');
const app = express();
const path = require('path');

const port= 8080;

const base = require('./routes/base');
const pay = require('./routes/pay');
const department = require('./routes/department');
const error= require('./util/error');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(express.json());
app.use('/base',base);
app.use('/pay',pay);
app.use('/department',department);

app.get('/', (req, res)=>{
res.render('index')

})

app.use((error, req, res, next)=>{
    error.statusCode = error.statusCode || 500;
    error.status= error.status || 'error';
    res.status(error.statusCode).json({
        status: error.statusCode,
        message:error.message
    })
})

app.listen(port, ()=> console.log(`Server on port: ${port}`));


