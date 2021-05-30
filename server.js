'use strict';
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.status(200).send('Welcome to Our Home Page');
})

app.listen(PORT);