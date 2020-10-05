const express = require('express');
const path = require('path');
const app = express();

const shareRouter = require('./src/routes/router-share');

app.set('views',path.join(__dirname,'src/views'));
app.set('view engine','hbs');

app.use('/share', shareRouter);

let PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log('Server Berjalan di Port : '+PORT+'...');
});