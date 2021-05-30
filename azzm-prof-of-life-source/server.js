'use strict';
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send('Welcome to Our Home Page');
})

app.listen(3000);